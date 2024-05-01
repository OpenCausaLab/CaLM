
		function showContent(Index) {
            var contents = document.getElementsByClassName('tab-content');
            for (var i = 0; i < contents.length; i++) {
                contents[i].style.display = 'none';
            }
            var buttons = document.getElementsByClassName('tab-button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
        
            
            document.getElementById('content-' + Index).style.display = 'block';
        
            
            
            var allTabButtons = document.getElementById('tab-buttons').getElementsByClassName('tab-button');
            for (var i = 0; i < allTabButtons.length; i++) {
                if (allTabButtons[i].textContent === Index) {
                    allTabButtons[i].classList.add('active');
                    break; 
                }
            }
        }

document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var scenario_id = params.get('method'); // e.g., GPT-4
    document.getElementById('scenario_id').innerHTML = scenario_id.split("*")[0];
    var subject_data_select = subject_data;
    const data_selected = subject_data_select.find(item => item['scenario_name'] === scenario_id);
    const data = data_selected.tables;
    const scenario_description = document.createElement('p');
    scenario_description.innerHTML = scenario_specific_dicts[scenario_id]['description'];
    const reference = document.createElement('p');
    reference.innerHTML = scenario_specific_dicts[scenario_id]['reference'];

    // const scenario_image_container = document.createElement('div');
    const container = document.getElementById('ScenariotablesContainer');
    // container.appendChild(scenario_image_container);
    if (scenario_id === "Backdoor Adjustment Set"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/BAS.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Frontdoor Adjustment Set"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/FAS.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Instrumental Variable"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/IV.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Collider Bias"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/CB.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Causal Effect Identification"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/CEI.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Controlled Direct Effect"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/CDE.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Effect of the Treatment on the Treated"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/ETT.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Natural Direct Effect"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/NDE.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    if (scenario_id === "Natural Indirect Effect"){
        const scenario_imag_example_container = document.createElement('div');
        scenario_imag_example_container.className = "image-container";
        const scenario_imag_example = document.createElement('img');
        scenario_imag_example.src = "../figures/scenario-specific/NIE.png";
        scenario_imag_example.style.width = "300px";
        scenario_imag_example_container.appendChild(scenario_imag_example);
        container.appendChild(scenario_imag_example_container);
    }
    container.appendChild(scenario_description);
    const reference_container = document.getElementById('ScenarioReferenceContainer');
    const scenario_image_container = document.getElementById('ScenarioImageContainer');
    scenario_image_container.className = "image-container";
    scenario_image_container.style.marginBottom = "20px";
    const scenario_image = document.createElement('img');
    scenario_image.src = scenario_specific_dicts[scenario_id]['img_src'];
    scenario_image.style.width = scenario_specific_dicts[scenario_id]['img_width'];
    scenario_image_container.appendChild(scenario_image);
    reference_container.appendChild(reference);

    var single_task_title = 0;

    Object.entries(data).forEach(([title, rows]) => {
        
        var tabButton = document.createElement('div');
        single_task_title = title;
        tabButton.className = 'tab-button' + (rows === 0 ? ' active' : '');
        tabButton.textContent = title;
        tabButton.onclick = function() { showContent(title); };
        document.getElementById('tab-buttons').appendChild(tabButton);
    
        
        var tabContent = document.createElement('div');
        tabContent.id = 'content-' + title;
        tabContent.className = 'tab-content' + (rows === 0 ? ' active' : '');
        tabContent.style.display = rows === 0 ? 'block' : 'none';

        const table = document.createElement('table');
        table.className = "js-sort-table";
        table.id = "results";
        // Assume headers are known or dynamically determined
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = Object.keys(rows[0]);
        headers.forEach(headerText => {
            const td = document.createElement('td');
            td.innerHTML = `<strong>${headerText}</strong>`; // Use innerHTML to include the <strong> tag
            if (headerText === 'Rank' || headerText === 'Average'|| headerText === 'Std'|| headerText === 'Basic' || headerText === 'Doubt' || headerText === 'Ignore' || headerText === '0-shot IcL' || headerText === '1-shot IcL' ||headerText === '3-shot IcL' ||headerText === '0-shot CoT' || headerText === 'Manual CoT'||headerText === 'EF' || headerText === 'Random Guess' || headerText === 'Prompt Average' || headerText === 'Prompt Std' || headerText === 'EN' || headerText === 'CN'|| headerText === 'Robustness'|| headerText === 'Median'|| headerText === 'Third Quartile'|| headerText === 'Top 1 Combination Value'|| headerText === 'Top 1 Average') {
                td.className = "js-sort-number";
            } else {
                td.className = "js-sort-string";
            }
            headerRow.appendChild(td);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        let Float_list = ['Average', 'Std', 'Basic', 'Doubt', 'Ignore','0-shot IcL','1-shot IcL' , '3-shot IcL' , '0-shot CoT','Manual CoT', 'EF','Random Guess','Prompt Average','Prompt Std','EN','CN', 'Robustness', 'Median', 'Third Quartile', 'Top 1 Combination Value', 'Top 1 Average'];
        const tbody = document.createElement('tbody');

        rows.forEach(function(item) {
            const row = document.createElement('tr');
            for (var j = 0; j < Object.keys(item).length; j++){
                const td = document.createElement('td');
                if (j === 1) {
                    var method = item[Object.keys(item)[j]];
                    method_encode = encodeURIComponent(method);
                    var link = document.createElement("a");
                    link.href = `model.html?method=${method_encode}`; 
                    link.textContent = method;
                    link.className = "inner-link";
                    link.style.fontSize = "12px";
                    td.appendChild(link);
                } else {
                    if (Float_list.includes(Object.keys(item)[j]) && !isNaN(item[Object.keys(item)[j]])){
                    const name = Object.keys(item)[j];
                    td.textContent = item[Object.keys(item)[j]].toFixed(1);
                    }
                    else {
                        td.textContent = item[Object.keys(item)[j]];
                    }
                }
                row.appendChild(td);
            }
            tbody.appendChild(row);
          });

        table.appendChild(tbody);
        // container.appendChild(table);
        
        // <div class="image-container"><img src="../figures/target_overview.png" alt="Target Overview" style="width: 1800px"></div>
        const image_container = document.createElement('div');
        image_container.className = "image-container";
        const image_performance = document.createElement('img');
        image_performance.src = `../figures/histograms/${scenario_id}_${title}.png`;
        // "width:60%; display:block; margin-left:auto; margin-right: auto; border: 1px solid #ccc;"
        image_performance.style.width = "800px";
        // image_performance.style.display = "block";
        // image_performance.style.marginLeft = "auto";
        // image_performance.style.marginRight = "auto";
        // image_performance.style.border = "1px solid #ccc";
        image_performance.alt = title;
        image_container.appendChild(image_performance);

        const img_title = document.createElement('h3');
        img_title.innerHTML = "Scenario Prompt Average Performance by Model";

        const tab_title = document.createElement('h3');
        tab_title.innerHTML = "Table of Scenario Performance";

        tabContent.appendChild(img_title);
        tabContent.appendChild(image_container);
        tabContent.appendChild(tab_title);
        tabContent.appendChild(table);
        document.getElementById('tab-container').appendChild(tabContent);

        
    });
    if ("task-average" in data) {
        showContent("task-average");
    }
    else {
        showContent(single_task_title);
    }
});

  

