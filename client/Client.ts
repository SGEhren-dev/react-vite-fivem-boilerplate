import { TimeUnits } from "Client/Enums";
import { sendReactMessage } from "./Utils";

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
		sendReactMessage("setHealth", (currentHealth / 200) * 100);
		playerLastHealth = currentHealth;
	}

	if (currentArmor !== playerLastArmor) {
		sendReactMessage("setArmor", (currentArmor / 100) * 100);
		playerLastArmor = currentArmor;
	}

	if (currentStamina !== playerLastStamina) {
		sendReactMessage("setBreath", (currentStamina / 200) * 100);
	}

}, 1 * TimeUnits.SECONDS);

let wasPlayerTalking: boolean;

/* Determine if the player is using their mic */
setInterval(() => {
	const playerTalking = NetworkIsPlayerTalking(PlayerId());

	if (playerTalking && !wasPlayerTalking) {
		sendReactMessage("setIsTalking", true);
		wasPlayerTalking = playerTalking;
	} else if (!playerTalking && wasPlayerTalking) {
		sendReactMessage("setIsTalking", false);
	}

}, 1 * TimeUnits.SECONDS);
