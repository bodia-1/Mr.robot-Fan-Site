const input = document.getElementById("input");
const output = document.getElementById("output");
const site = document.getElementById("site");
const home = document.getElementById("home");
const secret = document.getElementById("secret_button");
const terminal = document.getElementById("terminal");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerText += "└─$ " + cmd + "\n";

    if (cmd === "whoami") {
      output.innerText += "elliot\n";

    } else if (cmd === "help") {
      output.innerText += "Команды: whoami, help, clear, neofetch, show site, hide site, python, fix, instriction\n";

    } else if (cmd === "clear") {
      output.innerText = "";

    } else if (cmd === "neofetch") {
      output.innerText += `


..............                                         
            ..,;:ccc,.                              ┌──────────────────────────────────────────┐
          ......''';lxO.                              󰇺 Chassis : 
.....''''..........,:ld;                              󰣇 OS : Kali Linux
           .';;;:::;,,.x,                             >_ Terminal : kitty 0.42.2
      ..'''.            0Xxoc:,.  ...                 
  ....                ,ONkc;,;cokOdc',.              
 .                   OMo           ':ddo.           
                    dMc               :OO;            
                    0M.                 .:o.      
                    ;Wd
                     ;XO,                             
                       ,d0Odlc;,..                  
                           ..',;:cdOOd::,.            
                                    .:d;.':;.         
                                       'd,  .'        
                                         ;l   ..      
                                          .o          
                                            c         
                                            .'      
                                             .        

           welcome to the dark side...

  Terminal locked and loaded

\n`;

    } else if (cmd === "show site") {
      site.style.display = "block";
      terminal.style.display = "none";
      console.log("попробуй написать hackcommand");

    } else if (cmd === "hide site") {
      site.style.display = "none";

    }else if (cmd === "python") {
      output.innerText +="python version 3.13";
    }
    else if (cmd === "bodia") {
      output.innerText +="Это создатель если что";
      console.log("ООО ты нашел посхалку да ты тигр 🐅🐅🐅")
    }

    else if (cmd ==="fix") {
      home.style.backgroundImage = 'url(https://media1.tenor.com/m/TdfVOIHjS6gAAAAC/shaking-mr-robot-mr-robot.gif)';
    }
    else if (cmd === "instruction") {
      instruction.forEach(line => {
        output.innerText += line + "\n";
      });
    }
    else if (cmd === "fsociety") {
      output.innerText +="УХ ты + еще одна посхалка\n";
      console.log("зач ты чекаешь консоль?");
    }
    else if (cmd === "Ecorp") {
      setTimeout(function(){
           Ecorp.forEach(line => {
      output.innerText += line + "\n";
     });
      }, 3000);
    }
    else if (cmd === "hackcommand") {
      hackcommand.forEach(line => {
        output.innerText += line + "\n";
      })
    }

    else if (cmd === "ip a") {
      ip.forEach(line => {
        output.innerText += line + "\n";
      })
    }

    else if (cmd === "nmap -sS 10.228.76.19/24") {
      setTimeout(function(){
          nmap.forEach(line => {
        output.innerText += line + "\n";
      })
      }, 3000)
    }

    else if (cmd === "nmap") {
      output.innerText += "ага а айпи какой сканить будешь и ключ какой , поробуй ченкуть нижний терминал \n";
    }

    
    else {
      output.innerText += "Команда не найдена\n";
    }

    input.value = "";
  }
});

 const Terminal = document.getElementById("kali-terminal");

setTimeout(function(){
   Terminal.innerText = terminalLines.join("\n");
}, 10000);


  setTimeout(function(){
      //alert("просто пропиши в терминал HELP или INSTRUCTION (мелким текстом")
    output.innerText += "write help or instriction\n";
    }, 1000);

function button(){
  console.log("Все работает");
  terminal.style.display = "block";
};
  secret.onclick = button;


