import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import './App.css';

function App() {
  const initScript = () => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://accounts.google.com/gsi/client'//这个代表的是script 的src
    script.onload = initGoogle
    document.head.appendChild(script)
  }
  useLayoutEffect(() => {
    initScript()
  }, [])
  const initGoogle = useCallback(() => {
    //@ts-ignore
    if (typeof window.google === 'undefined') {
      console.log('google is undefined')
    } else {
      console.log('google is defined')
      //@ts-ignore
      // console.log('useEffect',window.google)
      //@ts-ignore
      window.google?.accounts?.id.initialize({
        client_id: "559756290278-9v1ngbvivap03i80qntgsin48ggmj5pc.apps.googleusercontent.com",
        login_uri: "https://metaplasia.io",
        ux_mode: "popup",
        context: "signin",
        callback: function (e: any){
          console.log(e)
        }
      });
      //@ts-ignore
      window.google?.accounts?.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "filled_black", size: "large",shape: "circle" }  // customization attributes
      );
      //@ts-ignore
      window.google?.accounts?.id.prompt(); // also display the One Tap dialog
    }
  }, [])

  // useEffect(() => {
  //   //@ts-ignore
  //   if (typeof window.google === 'undefined') {
  //     console.log('google is undefined'+n.toString())
  //     setN(n + 1)
  //   } else {
  //     console.log('google is defined')
  //   //@ts-ignore
  //   // console.log('useEffect',window.google)
  //   //@ts-ignore
  //   window.google?.accounts?.id.initialize({
  //     client_id: "559756290278-9v1ngbvivap03i80qntgsin48ggmj5pc.apps.googleusercontent.com",
  //     login_uri: "https://metaplasia.io",
  //     ux_mode: "popup",
  //     context: "signin",
  //     callback: function (e: any){
  //       console.log(e)
  //     }
  //   });
  //   //@ts-ignore
  //   window.google?.accounts?.id.renderButton(
  //       document.getElementById("buttonDiv"),
  //       { theme: "filled_black", size: "large",shape: "circle" }  // customization attributes
  //   );
  //   //@ts-ignore
  //   window.google?.accounts?.id.prompt(); // also display the One Tap dialog
  //   }
  // }, [n])

  return (
    <div className="App">
      <header className="App-header">
        <div id="buttonDiv"/>
      </header>
    </div>
  );
}

export default App;
