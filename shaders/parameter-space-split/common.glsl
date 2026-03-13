float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
