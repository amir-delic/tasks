// TASK 1

var array = [
  { id: 1, value: 9 },
  { id: 2, value: 5 },
  { id: 3, value: 3 },
  { id: 4, value: 6 },
  { id: 5, value: 5 },
];

function allAppears(arr) {
  var arr2 = [];
  for (var a of arr) {
    arr2.push(a.value);
  }

  var results = arr2.reduce((a, b) => {
    if (a[b]) {
      a[b]++;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});

  for (var key in results) {
    if (results[key] === 1) {
      console.log(`value:${key} - appear ${results[key]} time`);
    } else {
      console.log(`value:${key} - appears ${results[key]} times`);
    }
  }
  var newValue;
  var getMax = (obj) => {
    return Object.keys(obj).filter((x) => {
      return obj[x] === Math.max.apply(null, Object.values(obj));
    });
  };

  var num =
    getMax(results)
      .map((n) => parseInt(n, 10))
      .sort((a, b) => b - a)[0] + 1;

  if (!arr2.includes(num)) {
    newValue = num;
  } else {
    while (arr2.includes(num)) {
      num += 1;
      if (!arr2.includes(num)) {
        newValue = num;
        break;
      }
    }
  }

  var uniqueId = arr[arr.length - 1].id + 1;
  return { id: uniqueId, value: newValue };
}

var result = allAppears(array);
console.log(result);

// TASK 2

function lookup(obj, pat) {
  for (var i = 0, pat = pat.split("."); i < pat.length; i++) {
    if (obj[pat[i]] === undefined) {
      alert("Your path is incorrect");
    }
    obj = obj[pat[i]];
  }
  return obj;
}

var object = {
  property1: { property2: "Apple", property3: "Orange" },
  property4: { property5: "Grape", property6: "Kiwi" },
  property7: { property8: "Lemon", property9: "Peach", property10: "Mango" },
};
var path = "property7.property9";

var res = lookup(object, path);
//console.log(res);
