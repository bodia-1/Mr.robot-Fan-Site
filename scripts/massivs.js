const instruction = [
  "help - показывает все команды ",
  "whoami - показывает кто ты ",
  "clear - чистит терминал",
  "neofetch - показывает типо устройство я пытался сделать все реалистично но пока только так)",
  "show site - показывает сайт",
  "hide site - прячет сайт",
  "python - показывает версию python)",
  "fix - чинит заставку"
];

const hackcommand = [
  "Ecorp -  взломать E corp",
  "ip a - показывает твой ip",
  "nmap - сканирует сеть"
];

const Ecorp = [
  "└─$ hack ecorp",
  "[+] Initializing connection to E Corp mainframe...",
  "[+] Resolving target IP... 172.66.81.22",
  "[+] Port scan started: open ports found → 22 (SSH), 443 (HTTPS), 3306 (MySQL), 8080 (Admin Panel)",
  "[+] Bypassing firewall rules... success.",
  "[+] Establishing SSH session...",  
  "    • Trying default creds: root:toor → failed",  
  "    • Trying leaked creds from pastebin dump...",  
  "    • Success: Logged in as sysadmin@e-corp.local",
  "",
  "[+] Uploading exploit: /payloads/remote_shell.rev",
  "[+] Triggering buffer overflow in legacy HR module...",  
  "    • Overflow offset found at 0x0047A8F1",  
  "    • Executing shellcode...",  
  "    • Reverse shell established to 127.0.0.1:4444",
  "",
  "[+] Gaining root privileges...",
  "    • Exploiting dirty pipe vulnerability (CVE-2022-0847)...",  
  "    • Root shell acquired ✔",
  "",
  "[+] Accessing internal file system...",  
  "    • /etc/passwd → dumped",  
  "    • /var/log/employee.db → dumped",  
  "    • /opt/archives/backups.zip → downloading...",
  "",
  "[+] Injecting fsociety message into E Corp intranet...",
  "    • Message deployed to intranet.e-corp.local/motd.html",  
  '    • “We are fsociety. This is just the beginning.”',
  "",
  "[+] Encrypting financial records...",
  "    • Located /mnt/data/finance",  
  "    • 13,482 records found",  
  "    • AES-256 encryption complete.",  
  "    • Ransom note left as /mnt/data/README_FSOCIETY.txt",
  "",
  "[+] Disconnecting and wiping logs...",  
  "    • SSH logs: wiped",  
  "    • Syslog: wiped",  
  "    • Bash history: wiped",
  "",
  "[✓] Operation complete. E Corp compromised.",  
  "[✓] Exfiltration successful.",  
  "[✓] System integrity: destroyed.",
  "",
  "└─$ _"
];

const ip = [
  "1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000",
    "link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00",
    "inet 127.0.0.1/8 scope host lo",
     " valid_lft forever preferred_lft forever",
    "inet6 ::1/128 scope host noprefixroute ",
      " valid_lft forever preferred_lft forever",
"2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000",
   "link/ether 08:00:27:d9:aa:61 brd ff:ff:ff:ff:ff:ff",
    "inet 10.228.76.19/24 brd 10.228.76.255 scope global dynamic noprefixroute eth0",
       "valid_lft 3586sec preferred_lft 3586sec",
    "inet6 fe80::a00:27ff:fed9:aa61/64 scope link noprefixroute", 
      "valid_lft forever preferred_lft forever"
];

const nmap = [
  "Starting Nmap 7.95 ( https://nmap.org ) at 2025-07-20 08:37 CEST",
"Nmap scan report for 10.228.76.80",
"Host is up (0.0014s latency).",
"Not shown: 999 closed tcp ports (reset)",
"PORT   STATE SERVICE",
"53/tcp open  domain",
"MAC Address: 3A:25:94:4B:EE:CC (Unknown)",

"Nmap scan report for 10.228.76.248",
"Host is up (0.00028s latency).",
"Not shown: 996 filtered tcp ports (no-response)",
"PORT     STATE SERVICE",
"135/tcp  open  msrpc",
"139/tcp  open  netbios-ssn",
"445/tcp  open  microsoft-ds",
"5500/tcp open  hotline",
"MAC Address: BE:B3:EF:5F:84:B5 (Unknown)",

"Nmap scan report for 10.228.76.19",
"Host is up (0.0000020s latency).",
"All 1000 scanned ports on 10.228.76.19 are in ignored states.",
"Not shown: 1000 closed tcp ports (reset)",

"Nmap done: 256 IP addresses (3 hosts up) scanned in 7.64 seconds"
];

    const terminalLines = [
      "root@kali:~$ nmap -sS 192.168.1.1",
      "Starting Nmap 7.93 ( https://nmap.org )",
      "Nmap scan report for 192.168.1.1",
      "Host is up (0.0010s latency).",
      "PORT    STATE SERVICE",
      "22/tcp  open  ssh",
      "80/tcp  open  http",
      "443/tcp open  https"
    ];