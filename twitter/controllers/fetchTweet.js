const userTweetsConfig = {
    "api": {
    "uri": "https://twitter154.p.rapidapi.com/user/tweets",
    "method": "GET",
    "headers": {
    "X-RapidAPI-Key": '2eb542518emsh45deb453541b5adp1fb7e0jsn267f86f93e93',
    "X-RapidAPI-Host": 'twitter154.p.rapidapi.com'
    }
    }
   }
   async function getUserTweet(tweetsQueryParams) {
    const url = generateUri(tweetsQueryParams);
    const options = {
    method: userDetailsConfig.api.method,
    headers: userDetailsConfig.api.headers
    };
    await new Promise(r => setTimeout(r, 1000));
    const response = await fetch(url, options);
    return await response.json();
   };
   function generateUri(tweetsQueryParams){
    const baseUri = userTweetsConfig.api.uri;
    return `${baseUri}?${new URLSearchParams(tweetsQueryParams.toJson()).toString()}`;
   }
   function processResponse(data){
    let result = []
    return data.results.foreach(data =>{
    const element = {
    "text": data.text,
    "media_url": data.media_url};
    });
   }