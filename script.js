const input = document.getElementById("commandInput");
const output = document.getElementById("output");

// Obfuscated-ish ARG code
// Hint idea: AUREX = gold = Au = atomic number 79
const ACCESS_HASH = btoa("access-file-79");
const COMP = btoa("access-file-79");
function print(text) {
    const p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const command = input.value.trim();
        input.value = "";

        print("> " + command);

        if (command.toLowerCase() === "help") {
            print("Available commands: AUTH, STATUS, warning");
        }
        else if (command.toLowerCase() === "status") {
            print("SYSTEM STATUS: UNSTABLE");
            print("DATA CORRUPTION: 47%");
            print("LAST BREACH: [REDACTED]");
        }
        else if (command.toLowerCase().startsWith("auth ")) {
            const code = command.slice(5);
            const encoded = btoa(code);

            if (encoded === ACCESS_HASH) {
                print("ACCESS GRANTED.");
                print("Decrypting files...");
                print("FILE_01: aurex.txt");
                print("FILE_02: ██████████");
                print("FILE_03: ██████████");
            } 
            else if (encoded === COMP){
                window.open("https://lab.sillygoose12.org/completion.txt", "_blank");
            }
            else {
                print("ACCESS DENIED.");
                print("WARNING: Unauthorized attempt logged.");
            }
        }
        else if (command.toLowerCase() === "warning") {
            print(`AUREX LABS — EMERGENCY NOTICE

This message is being transmitted on all remaining internal channels.
If you are reading this, containment has failed.

All personnel, contractors, and unauthorized individuals are strongly advised to evacuate the building immediately. Do not attempt to retrieve personal belongings. Do not access lower levels. Do not respond to voices, announcements, or messages claiming to be “routine.” They are not.

Aurex Labs no longer guarantees the safety of anyone inside the facility.

Over the last several hours, systems previously classified as inactive have resumed autonomous operation. Security logs show doors unlocking without authorization, terminals executing commands without input, and subjects responding to stimuli that does not exist. Several research teams have gone silent after reporting “echo responses” originating from sealed chambers.

If you hear your name being spoken over the intercom, do not answer.
If you see lights activating ahead of you, change direction.
If you encounter a terminal requesting authentication, leave it untouched.

Exposure time inside the building is directly correlated with memory loss, disorientation, and false recognition events. Individuals have reported familiarity with people they have never met, rooms that rearrange themselves, and instructions that feel correct despite contradicting protocol.

This is not a drill.

Aurex Labs was never meant to observe. It was meant to listen.

Exit through the nearest marked route and continue moving until you are no longer within visual range of the facility. Do not look back at illuminated windows. Do not attempt to document what you experience. Devices removed from the building have exhibited abnormal behavior and spontaneous data rewriting.

If evacuation is no longer possible, remain where you are and do not attempt further system access. Additional interaction increases the likelihood of detection.

Aurex Labs is still active.
Aurex Labs is still learning.

For your own safety, leave now. -11file`);
        }
        else {
            print("Unknown command.");
        }
    }
});


