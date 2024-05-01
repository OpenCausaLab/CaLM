var params = new URLSearchParams(window.location.search);
var model_id = params.get('method'); // e.g., GPT-4
const href = `model.html?method=${model_id}`;

// var tbody = document.querySelector("#model-table");
var subject_data_select = subject_data;

const container = document.getElementById('ModeltablesContainer');
var blueBox = document.createElement('p');
blueBox.id = 'blue-box'; 
blueBox.innerHTML = model_specific_dicts[model_id]['description'];
container.appendChild(blueBox);

document.getElementById('model_id').innerHTML = model_id.split("*")[0];
const data_selected = subject_data_select.find(item => item['model_name'] === model_id);


var table = document.createElement('table');
table.className = "js-sort-table";
table.id = "results";

var thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = Object.keys(data_selected.static_list[0]);
headers.forEach(headerText => {
    const td = document.createElement('td');
    td.innerHTML = `<strong>${headerText}</strong>`; // Use innerHTML to include the <strong> tag
    if (headerText === 'Index' || headerText === 'Rank' || headerText === 'Average'|| headerText === 'Std'|| headerText === 'Basic' || headerText === 'Doubt' || headerText === 'Ignore' || headerText === '0-shot IcL' || headerText === '1-shot IcL' ||headerText === '3-shot IcL' ||headerText === '0-shot CoT' || headerText === 'Manual CoT'||headerText === 'EF' || headerText === 'Random Guess' || headerText === 'Prompt Average' || headerText === 'Prompt Std' || headerText === 'EN' || headerText === 'CN'|| headerText === 'Robustness'|| headerText === 'Median'|| headerText === 'Third Quartile'|| headerText === 'Top 1 Combination Value'|| headerText === 'Top 1 Average') {
        td.className = "js-sort-number";
    } else {
        td.className = "js-sort-string";
    }
    headerRow.appendChild(td);
});
thead.appendChild(headerRow);
table.appendChild(thead);

let Float_list = ['Average', 'Std', 'Basic', 'Doubt', 'Ignore','0-shot IcL','1-shot IcL' , '3-shot IcL' , '0-shot CoT','Manual CoT', 'EF','Random Guess','Prompt Average','Prompt Std','EN','CN', 'Robustness', 'Median', 'Third Quartile', 'Top 1 Combination Value', 'Top 1 Average'];
var tbody = table.createTBody();

data_selected.static_list.forEach(function(item) {
  var row = tbody.insertRow();
  for (var j = 0; j < Object.keys(item).length; j++){
      var cell = row.insertCell();
      if (j === 1) {
          var method = item[Object.keys(item)[j]];
          method_encode = encodeURIComponent(method);
          var link = document.createElement("a");
          link.href = `scenario.html?method=${method_encode}`;
          link.textContent = method;
          link.className = "inner-link";
          link.style.fontSize = "12px";
          cell.appendChild(link);
      } else {
          if (Float_list.includes(Object.keys(item)[j]) && !isNaN(item[Object.keys(item)[j]])){
          const name = Object.keys(item)[j];
          cell.textContent = item[Object.keys(item)[j]].toFixed(1);
          }
          else {
            cell.textContent = item[Object.keys(item)[j]];
          }
      }
  }
});

document.getElementById("SpecificModeltablesContainer").appendChild(table);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dynamic-image-performance').src = "../figures/model-specific/Performances_of_"+model_id+".jpg"
    document.getElementById('dynamic-image-rank').src = "../figures/model-specific/Ranks_of_"+model_id+".jpg"
    document.getElementById('dynamic-image-histogram').src = "../figures/histograms/"+model_id+".png"
    
});

const reference_container = document.getElementById('ReferenceContainer');
reference_container.innerHTML = model_specific_dicts[model_id]['references'];