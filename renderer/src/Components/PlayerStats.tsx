import React, { memo } from "react";
import { faHeart, faShield, faLungs, faMicrophone, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayerStat } from "MyMod/Data/Enums";
import { useSelector } from "MyMod/Data/Store";
import { getPlayerIsTalking, getPlayerStat } from "MyMod/Data/Selectors/PlayerState";

interface IPlayerStat {
	icon: IconDefinition;
	key: PlayerStat;
	color: string;
	hidden: boolean;
}

const stats: IPlayerStat[] = [
	{
		icon: faHeart,
		key: PlayerStat.HEALTH,
		color: "#29ff62",
		hidden: false
	},
	{
		icon: faShield,
		key: PlayerStat.ARMOR,
		color: "#296dff",
		hidden: false
	},
	{
		icon: faLungs,
		key: PlayerStat.BREATH,
		color: "#717171",
		hidden: false
	}
];

const PlayerStats = () => {
	const getPlayerStatValue = (stat: PlayerStat) => useSelector((state) => getPlayerStat(state, stat));
	const isTalking = useSelector(getPlayerIsTalking);

	const renderStatBar = (playerStat: IPlayerStat) => {
		const { icon, key, color, hidden } = playerStat;
		const value = getPlayerStatValue(key);
		const clampedPercentage = Math.min(Math.max(value, 0), 100);

		if (hidden) return;

		return (
			<div className="stat-bar">
				<div className="progress" style={ { height: `${ clampedPercentage }%`, backgroundColor: color } } />
				<FontAwesomeIcon className="stat-icon" icon={ icon } />
			</div>
		);
	};

	return (
		<div className="stat-container">
			{ stats.map(renderStatBar) }
			{ isTalking && (
				<div className="stat-bar">
					<div className="progress" style={ { height: "100%", backgroundColor: "#d8eb34" } } />
					<FontAwesomeIcon className="stat-icon" icon={ faMicrophone } />
				</div>
			) }
		</div>
	);
};

export default memo(PlayerStats);