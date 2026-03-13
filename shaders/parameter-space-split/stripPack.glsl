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
    return uv * 6.50;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    


    // Show current mouse position
    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    p = normalize_coord(fragCoord);
    if (length(p - mouseUV) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }


    fragColor = vec4(color, 1.0);
    
}
