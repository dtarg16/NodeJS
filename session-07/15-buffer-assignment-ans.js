==== answer.js ====
function answer(){
    let buf = Buffer.allocUnsafe(2);
    buf.writeUInt16BE(1024);
    return buf;
} 

answer();
===

