const readline = require('readline');
const fs = require('fs');
const player = require('play-sound')(opts = {});
const { spawn } = require('child_process');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stations = [];

function loadStations() {
    fs.readFile('stations.json', (err, data) => {
        if (err) throw err;
        stations = JSON.parse(data);
        displayMenu();
    });
}

function displayMenu() {

console.clear();
console.log('                                                         ,--,                             ');
console.log('                         ,---,  ,--,             .--., ,--.\'|                             ');
console.log('  __  ,-.              ,---.\'|,--.\'|    ,---.  ,--.\'  \|  | :            ,--,             ');
console.log(',\' ,\'/ /|              |   | :|  |,    \'   ,\'\ |  | /\/:  : \'          ,\'_ /|  ,--,  ,--, ');
console.log('\'  | |\' | ,--.--.      |   | |`--\'_   /   /   |:  : :  |  \' |     .--. |  | :  |\'. \/ .`| ');
console.log('|  |   ,\'/       \   ,--.__| |,\' ,\'| .   ; ,. ::  | |-,\'  | |   ,\'_ /| :  . |  \'  \/  / ; ');
console.log('\'  :  / .--.  .-. | /   ,\'   |\'  | | \'   | |: :|  : :/||  | :   |  \' | |  . .   \  \.\' /  ');
console.log('|  | \'   \__\/: . ..   \'  /  ||  | : \'   | .; :|  |  .\'\'  : |__ |  | \' |  | |    \  ;  ;  ');
console.log(';  : |   ," .--.; |\'   ; |:  |\'  : |_|   :    |\'  : \'  |  | \'.\'|:  | : ;  ; |   / \  \  \ ');
/*console.log('|  , ;  /  /  ,.  ||   | \'/  \'|  | \'.\'\   \\  / |  | |  ;  :    ;\'  :  `--\'   \./__;   ;  \');*/
console.log(' ---\'  ;  :   .\'   \   :    :|;  :    ;`----\'  |  : \  |  ,   / :  ,      .-./|   :/\  \ ;');
console.log('       |  ,     .-./\   \  /  |  ,   /         |  |,\'   ---`-\'   `--`----\'    `---\'  `--`');
console.log('\n');
console.log(' ..::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..\n..::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..\n..::::::::::::::::::::::::::::::::::::::::::::::::::::::::::--==+**####**+::::::::::::::::::::::..\n..:::::::::::::::::::::::::::::::::::------=====+++***********###%%%%%%%#*-:::::::::::::::::::::..\n..::::::::::::::::::::::=+===++++***#########%%%%%%%###***+++====-------=*=::----:::::::::::::::..\n ..::::::::::::::::::::::*#%%###**++==--:::::::::::--==++***######**+++===----::-*=::::::::::::::..\n..:::::::::::::::::::::=*+----===++*****+++==========++++**++++++=====-:-++*+-:*+*::::::::::::::..\n..:::::::::::::++++++++=========++=++++++++*******++-#%%%%%#+++===+++*-=*#%%#++*##*:::::::::::::..\n..::::::::::::==+==*-=+====+*%%%%#=+*%*#%%%%##%###++=%%%%%%#**######++:++%%%%***#%%:::::::::::::..\n..::::::::::::-**%%++++++*****++=-++####*+*+*#%%%#++----==+++*+====+*+++*++*+*-**%%:::::::::::::..\n..::::::::::::-+*#*+======++*#****#-:::::::::---::==+*+=+++*#%%%%%%%%*==++=+#%=**%%:::::::::::::..\n..::::::::::::-+*+==#%%%%%%#*=##**#---------=++*==++#*++*#%%%%%%%%%%%%%%*=**+#=**%%-::::::::::::..\n..::::::::::::-+*=#%%%%%%%%%%%=+#=*--=========+*=:=+*=-#%%%%%%%%%%%%%%%%%#-+#+=**%%-::::::::::::..\n..::::::::::::-*=*%%%%%%%%%%%%%++**++#%%%%%%%*=*=:=+=-#%%%%%%%%%%%%%%%%%%%%=+#-#*%%-::::::::::::..\n..::::::::::::-**#%%%%%%%%#**#%#=#%%%%####%%%%%#=-=+=*%%%%%%%%%#*+**#%%%%%%#=#+#*%%-::::::::::::..\n..::::::::::::-#*%%%%%%%%*+:+*%#+*%%%+------=#%%+++#-*%%%%%%%%#+=:-+*%%%%%%#=*##*%%-::::::::::::..\n..::::::::::::-#*#%%%%%%%#**+*%#+*%-:::::::::::+=:=*=*%%%%%%%%%+*++**%%%%%%#=*##*%%=::::::::::::..\n..:::::::::::::#=*%%%%%%%%%%%%%#=#%++++=++++++++=+*+=+%%%%%%%%%%%##%%%%%%%%#=#*#*%%=::::::::::::..\n..:::::::::::::#=+#%%%%%%%%%%%%=***+==============++==#%%%%%%%%%%%%%%%%%%%%-+#-#*%%=::::::::::::..\n..:::::::::::::#+++=%%%%%%%%%*-##=*==+==+++++++++++**+-+%%%%%%%%%%%%%%%%%#-*#+-#*%%=::::::::::::..\n..:::::::::::::#+%#==-*####+-*%++#*--=--=:=:=+=*+:-*##=++#%%%%%%%%%%%%%#==##=#=**%%=::::::::::::..\n..:::::::::::::#===+==*#####*=+###*=:=-=+=*=-=::=:-*#%%*+*++*##%%%%#*+=+##=*%%=**%%=::::::::::::..\n..::::::::::::-*=:--:+******++++==+=++++++++++==+==*+*****++********##*+*#%%%#=*#%%=::::::::::::..\n..::::::::::::=*-----*%%%%%%%%%%%%%%############***++====---===++**********+++++#%%=::::::::::::..\n..::::::::::::+*:::::=++++*++*########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*-=***+--++%%%=::::::::::::..\n..::::::::::::+*:-::-:*#*#**-*=+===-=======+++*********#####%%%%%%%%#*++****+***%%%-::::::::::::..\n..::::::::::::=#####***+===-:-:==*-:::::::::::==-+:+**=--+++=-=+******+#%%%+**#*%%+:::::::::::::..\n..:::::::::::::::::+**###%%%%%%%%%%##*+=-:::::=::-:=%#-:-#%#=::%#*+::=++##+*+###%#-:::::::::::::..\n..:::::::::::::::::::::::::::::--=++*#####%%%%%%%%##**++===-----+=:::::+++++-+#%%*::::::::::::::..');
console.log('..:::::::::::::::::::::::::::::::::::::::::::---==+++***###%%%%%%%%%%%#####**#%%#=::::::::::::::..\n..:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::----==*#*++#%*=::::::::::::::::..\n..::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.. ');
console.log('\n');
console.log('Radioflux Stations:');
console.log('\n');
    stations.slice(0, 4).forEach((station, index) => {
        console.log(`${index + 1}. ${station.title} - ${station.genre}`);
    });
    console.log('5. Add Station');
    console.log('6. Remove Station');
    console.log('7. Exit');
    rl.question('Choose an option: ', handleMenuChoice);
}

function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
        case '2':
        case '3':
        case '4':
            playStation(stations[choice - 1]);
            break;
        case '5':
            addStation();
            break;
        case '6':
            removeStation();
            break;
        case '7':
            rl.close();
            break;
        default:
            console.log('Invalid choice. Try again.');
            displayMenu();
    }
}

function playStation(station) {
    console.log(`Playing ${station.title}...`);
    console.log(`Run 'killall mplayer' to stop.`);

    // Spawn mplayer with a cache setting of 8192 kilobytes
    //const mplayer = spawn('mplayer', ['-cache', '8192', '-cache-min', '10', station.url]);
    // 2024-11-19 Lowered cache significantly
    const mplayer = spawn('mplayer', ['-v', '-cache', '192', '-cache-min', '2', station.url]);

    /*mplayer.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });*/
    mplayer.stdout.on('data', (data) => {
        process.stdout.write('\r\x1b[K'); // Clear the current line and return cursor to the start
        process.stdout.write(`stdout: ${data.toString().trim()}`); // Output new data on the same line
    });

    mplayer.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    mplayer.on('error', (err) => {
        console.error('Failed to start mplayer:', err);
    });

    mplayer.on('exit', (code) => {
        console.log(`mplayer exited with code ${code}`);
    });

    rl.question('Press Enter to stop and return to menu.', (answer) => {
        mplayer.kill(); // Kill the mplayer process
        displayMenu();
    });
}
/*
function playStation(station) {
    console.log(`Playing ${station.title}...`);
    console.log(`Run 'killall mplayer' to stop.`);
    player.play(station.url, function(err){
        if (err) throw err
    });
    rl.question('Press Enter to stop and return to menu.', (answer) => {
        killStation(); // My attempt at fixing it 2023-10-09
        displayMenu();
    });
}
*/
function killStation() {
  const { exec } = require('node:child_process');
  exec('killall mplayer', (err, output) => {
    if (err) {
      console.error("could not execute command: ", err);
      return;

    }
    console.log("Output: \n", output);
  });
}

function addStation() {
    rl.question('Enter station title: ', title => {
        rl.question('Enter station URL: ', url => {
            rl.question('Enter station genre: ', genre => {
                rl.question('Enter station notes: ', notes => {
                    stations.push({ title, url, genre, notes });
                    saveStations();
                });
            });
        });
    });
}

function removeStation() {
    rl.question('Enter the number of the station to remove: ', number => {
        const index = number - 1;
        if (stations[index]) {
            stations.splice(index, 1);
            saveStations();
        } else {
            console.log('Invalid number. Try again.');
            removeStation();
        }
    });
}

function saveStations() {
    fs.writeFile('stations.json', JSON.stringify(stations, null, 2), (err) => {
        if (err) throw err;
        console.log('Stations updated.');
        displayMenu();
    });
}

loadStations();

