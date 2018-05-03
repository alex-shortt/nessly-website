var scene, renderer, camera, controls;
var time = 0;
var objects = [];

function initModel(container) {
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 100000);
    camera.position.set(0, 27, 91);

    controls = new THREE.OrbitControls(camera);
    controls.noPan = true;
    controls.minDistance = 60;
    controls.maxDistance = 100;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true,
        antialias: true
    });
    renderer.setClearColor(0xffffff, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.physicallyBasedShading = true;
    $(container).append(renderer.domElement);

    var light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(1, 0, 0.8);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff, 1.0);
    light2.position.set(-1, 0, 0.8);
    scene.add(light2);

    loadModels();

    var path = "./assets/nx.jpg";
    var urls = [
        path,
        path,
        path,
        path,
        path,
        path
    ];

    var envCube = THREE.ImageUtils.loadTextureCube(urls, null);
    var shader = THREE.ShaderLib["cube"];
    shader.uniforms["tCube"].value = envCube;

    var material = new THREE.ShaderMaterial({
        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), material);
    scene.add(mesh);
    window.addEventListener('resize', onWindowResize, false);
}

function loadModels() {
    var image = new Image();
    var imgSrc = "./assets/bluereflection.png";
    image.src = imgSrc;
    var urls = [imgSrc, imgSrc, imgSrc, imgSrc, imgSrc, imgSrc];

    var abstractCube = THREE.ImageUtils.loadTextureCube(urls, THREE.CubeRefractionMapping);
    abstractCube.minFilter = abstractCube.magFilter = THREE.NearestFilter;
    var abstractMat = new THREE.MeshBasicMaterial({
        envMap: abstractCube,
        refractionRatio: 0.9,
        side: 2
    });

    var logoCube = THREE.ImageUtils.loadTextureCube(urls, null);
    var logoMat = new THREE.MeshPhongMaterial({
        envMap: logoCube,
        side: 2,
        color: 0x000000,
        reflectivity: 0.15,
        combine: THREE.MixOperation
    });

    loadModel("./models/nessly.obj", abstractMat, {
        scale: 0.8,
        position: new THREE.Vector3(0.0, 0.0, 0.0)
    });
}

function loadModel(model, material, params) {
    function onError(xhr) {};

    function onProgress(xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {
        console.log(item, loaded, total);
    };

    var loader = new THREE.OBJLoaderGEO(manager);
    loader.load(model, function(object) {
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
                child.geometry.computeVertexNormals();
                child.geometry.mergeVertices();
            }
        });
        object.scale.x = object.scale.y = object.scale.z = params.scale;
        object.position.copy(params.position);

        scene.add(object);
        console.log(object);
        objects.push(object);
        object.rotation.x = Math.PI * 3 / 2;

    }, onProgress, onError);
}

function animateModel() {
    requestAnimationFrame(animateModel);
    renderer.render(scene, camera);
    controls.update();
    draw();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function draw() {
    time += 0.01;
    if (objects[0]) objects[0].rotation.z += 0.005;
}
