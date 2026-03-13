
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}
vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 5.50;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    float curv0 = 1.0;
    float phi = (sqrt(5.)+1.)/2.;
    float curv1 = phi - sqrt(phi);
    float curv2 = curv1 * curv1;
    float curv3 = curv2 * curv1;

    vec4 quad=vec4(0.,1.,2.,(1.+sqrt(2.))*(1.+sqrt(2.)));
    // quad = vec4(0.,0.,1.,1.);
    // quad = vec4(0.,1.,1.,4.);
    // quad=vec4(-1.,2.,2.,3.);
    // quad=vec4(-2.,3.,6.,7.);
    quad = vec4(curv0,curv1,curv2,curv3);
    Circle[4] mainCirc = circQuad(quad);

    

    // Circle cc0 = mainCirc[0];
    // Circle cc1 = mainCirc[1];
    // Circle cc2 = mainCirc[2];
    // Circle cc3 = mainCirc[3];
    
    
    // // Dual circles
    // vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    // vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    // vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    // vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    // vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    // vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // // --- Dual circles construction ---
    // Circle c0 = circleFromThreePoints(t12, t23, t31);
    // Circle c1 = circleFromThreePoints(t02, t23, t03);
    // Circle c2 = circleFromThreePoints(t01, t03, t31);
    // Circle c3 = circleFromThreePoints(t12, t02, t01);

    // if (length(p - t01.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t02.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t03.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t12.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t23.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t31.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }

    
    // Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    // //orient duals 
    
    // dualOrient(circ);

    // if(isInside(p,circ[0])){
    //     color=Pink;
    // }
    // if(isInside(p,circ[1])){
    //     color=Purple;
    // }
    // if(isInside(p,circ[2])){
    //     color=Yellow;
    // }
    //  if(isInside(p,circ[3])){
    //     color=Green;
    // }

    color = packing(mainCirc, p);    

if(isOnBoundary(p,mainCirc[0],thick)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[1],thick)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[2],thick)){
        color=BLACK;
    }
     if(isOnBoundary(p,mainCirc[3],thick)){
        color=BLACK;
    }
    

    fragColor = vec4(color, 1.0);
    
}
