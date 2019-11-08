import React from 'react';

function Map(props){
    return(
        <div className={"wrapper-map"}>
            <p className="heading-map">як нас знайти</p>
            <iframe 
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.865690745507!2d28.475960934961858!3d49.24103558164133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b671218b0f5%3A0xe88b8fb2f34ac7b0!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgMjMsINCS0LjQvdC90LjRhtCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1sru!2sua!4v1573203581844!5m2!1sru!2sua"} 
                width={"600"}
                 height={"450"} 
                 >
            </iframe>
        </div>
    )
}

export default Map;