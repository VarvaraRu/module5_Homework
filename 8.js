let legumes = new Map ([
    ["carrotte", "orange"],
    ["courgette", "vert"],
    ["chou", "blanc"],
    ["tomate", "rouge"],
    ["concombre", "vert"],
  ]); 
  
  for (let [key, value] of legumes) {
    console.log(`${key} - ${value}`);
  }; 