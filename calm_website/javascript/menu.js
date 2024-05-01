var model_performances = model_data;

document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.querySelector('#model-dynamic-menu');
    // Organize data by Level
    const Organizations = {};
    model_performances.forEach(item => {
        if (!Organizations[item.Organization]) {
            Organizations[item.Organization] = [];
        }
        Organizations[item.Organization].push(item['Model']);
    });

    // Generate menu
    Object.entries(Organizations).forEach(([Organization, models]) => {
        const li = document.createElement('li');
        li.className = "sub-menu-style-two";
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = Organization;
        const i = document.createElement('i');
        i.className = "fas fa-chevron-down";
        a.appendChild(i);
        li.appendChild(a);

        const subMenu = document.createElement('ul');
        subMenu.className = "sub-menu-two";
        models.forEach(model => {
            const subLi = document.createElement('li');
            const link = document.createElement('a');
            link.href = `model.html?method=${encodeURIComponent(model)}`;
            link.textContent = model;
            subLi.appendChild(link);
            subMenu.appendChild(subLi);
        });

        li.appendChild(subMenu);
        menuContainer.appendChild(li);
    });

});

