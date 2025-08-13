function cloak() {
  var win = window.open("about:blank") 
  var iframe = document.createElement("iframe") 

  const link = win.document.createElement("link");
  link.rel = "icon" 
  link.href = "https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico";

  win.document.head.appendChild(link);
  win.document.body.style.margin = "0";
  win.document.body.style.padding = "0";
  win.document.title = "Google";

  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.src = "/h";

  win.document.body.appendChild(iframe);
  window.location.href = "https://google.com"
}