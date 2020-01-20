# NamecheapPanel
An alternative of namecheap's domain management panel. Their system is way too laggy.

### A PHP API proxy example
```PHP
<?php
header('Access-Control-Allow-Origin: *');
curl_setopt_array($ch=curl_init(),array(
	CURLOPT_URL=>'https://api.'.(isset($_GET['sandbox'])?'sandbox.':'').'namecheap.com/xml.response',
	CURLOPT_POST=>true,
	CURLOPT_HEADER=>false,
	CURLOPT_TIMEOUT=>10,
	CURLOPT_POSTFIELDS=>http_build_query(array_merge($_POST,array(
		'ClientIP'=>$_SERVER['REMOTE_ADDR']))),
	CURLOPT_HTTPHEADER=>$headers,
	CURLOPT_AUTOREFERER=>true,
	CURLOPT_FOLLOWLOCATION=>true,
	CURLOPT_RETURNTRANSFER=>true));
echo(curl_exec($ch));
curl_close($ch);

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
