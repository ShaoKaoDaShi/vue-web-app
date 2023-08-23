import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import request from "./request";

const replay = () => {
    request.post("/api/rrweb/get").then((response) => {
        // debugger
        const { data:{events = []} } = response
        new rrwebPlayer({
            target: document.body, // 可以自定义 DOM 元素
            // 配置项
            props: {
                events: events.slice(100,-100).map(item=>{
                const timestamp = new Date(item.timestamp).getTime()
                return {
                  ...item,
                  timestamp,
                  type:+item.type
                }
                }),
            },
        });
    });

};

export default replay;