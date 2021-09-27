$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data){document.write(JSON.stringify(data.ip, null, 2));});
