const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b671edd6ecmshaeb6980a04e4ca9p19ee29jsnaaf4c3ec6273',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};

  const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}`, OPTIONS)
            .then(res => res.json())
            .catch(err => console.error(err))
  };
 

  const form = document.querySelector('#form');
  const input = document.querySelector('#input');
  const submit = document.querySelector('#submit');
  const results = document.querySelector('#results');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {value} = input;
    if(!value) return ;

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy','true');

    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
        results.innerHTML = JSON.stringify(ipInfo, null, 2)  
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');
    
  })