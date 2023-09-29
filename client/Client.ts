import { TimeUnits } from "Client/Enums";
import { sendIpcMessage } from "Client/Utils";

let playerLastHealth: number;
let playerLastArmor: number;
let playerLastStamina: number;

/* Handle player stat updating */
setInterval(() => {
	const playerPed = PlayerPedId();
	const currentHealth = GetEntityHealth(playerPed);
	const currentArmor = GetPedArmour(playerPed);
	const currentStamina = GetPlayerStamina(PlayerId());

	if (currentHealth !== playerLastHealth) {
		sendIpcMessage("setHealth", (currentHealth / 200) * 100);
		playerLastHealth = currentHealth;
	}

	if (currentArmor !== playerLastArmor) {
		sendIpcMessage("setArmor", (currentArmor / 100) * 100);
		playerLastArmor = currentArmor;
	}

	if (currentStamina !== playerLastStamina) {
		sendIpcMessage("setBreath", (currentStamina / 200) * 100);
	}

}, 1 * TimeUnits.SECONDS);

let wasPlayerTalking: boolean;

/* Determine if the player is using their mic */
setInterval(() => {
	const playerTalking = NetworkIsPlayerTalking(PlayerId());

	if (playerTalking && !wasPlayerTalking) {
		sendIpcMessage("setIsTalking", true);
		wasPlayerTalking = playerTalking;
	} else if (!playerTalking && wasPlayerTalking) {
		sendIpcMessage("setIsTalking", false);
	}

}, 1 * TimeUnits.SECONDS);
