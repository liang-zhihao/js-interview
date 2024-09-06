function ajax(url) {
  return new Promise((resolve, reject) => {
    const r = new XMLHttpRequest();

    r.open("get", url);
    r.onreadystatechange = () => {
      if (r.readyState === 4) {
        if (r.status >= 200 && r.status <= 300) {
          resolve(JSON.parse(r.responseText));
        } else {
          reject("wrong");
        }
      }
    };
    r.send();
  });
}
for (var index = 0; index < 3; index++) {}
