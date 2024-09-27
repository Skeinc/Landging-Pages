// Инициализация сцены, камеры и рендера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 980 / 517, 0.1, 1000);
// Инициализация рендера с поддержкой прозрачности
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(980, 517);
renderer.setClearColor(0x000000, 0); // Устанавливаем прозрачный цвет (alpha = 0)
document.querySelector('.map-container').appendChild(renderer.domElement);

// Создаем геометрию шара
const geometry = new THREE.SphereGeometry(5, 32, 32);

// Загрузка текстуры (ваша карта мира)
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/images/sources/map.png');

// Материал для шара с натянутой текстурой карты
const material = new THREE.MeshBasicMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);

// Добавляем глобус на сцену
scene.add(globe);

// Позиция камеры
camera.position.z = 8;

// Функция анимации вращения
function animate() {
    requestAnimationFrame(animate);

    // Вращаем глобус по оси Y для эффекта вращения
    globe.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Запускаем анимацию
animate();