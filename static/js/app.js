// Добавление товара в корзину
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.id;
        fetch('/add_to_cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: productId })
        }).then(response => response.json()).then(data => {
            alert('Товар добавлен в корзину!');
        });
    });
});

// Сохранение настроек
document.getElementById('settings-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/save_settings', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(data => {
        alert('Настройки сохранены!');
    });
});

// Смена темы
document.getElementById('theme')?.addEventListener('change', function() {
    document.body.className = this.value;
});
