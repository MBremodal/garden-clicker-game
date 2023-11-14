// AboutSection.js
import {Link} from 'react-router-dom';
import './aboutPage.scss';

const AboutSection = () => {
	return (
		<div className='about-section'>
			<h1>Welcome to Timber Tales Clicker!</h1>
			<p>Immerse yourself in the serenity of cultivating a vibrant landscape, growing trees, and reaping the rewards of your hard work. Get ready to embark on an exciting clicker game that combines the joys of agriculture with the thrill of resource management.</p>
			<p>Start your farming journey by preparing the land for sowing. Click to clear the fields, plant seeds, and watch as your crops begin to flourish. But this game is not just about traditional farming - it's about nurturing a forest of diverse trees. As they grow, you'll find yourself faced with the decision to harvest them for valuable resources.</p>
			<p>Click your way through the lush forest you've created, and with each click, collect a variety of resources. Whether it's wood, fruits, or special tree-based items, each harvest brings you closer to building your agricultural empire. Be strategic in your choices, as different trees yield different rewards.</p>
			<p>Head over to the bustling in-game shop where you can sell your hard-earned resources for coins. Use your coins to unlock new tools, purchase upgrades, and enhance your farming capabilities. The more efficiently you manage your resources, the faster your farm will flourish.</p>
			<p>Invest your coins wisely in a range of upgrades that will supercharge your farming experience. Improve your planting speed, increase harvest yields, or unlock new and exotic tree species. As you progress, discover rare upgrades that add exciting twists to the gameplay, keeping you engaged and motivated.</p>
			<p>Set personal goals and challenges as you strive to build the most prosperous farm in Timber Tales. Compete with friends or global players to see who can achieve the highest level of success. The journey is as important as the destination, and in Timber Tales Clicker, every click counts!</p>
			<p>Immerse yourself in a soothing, visually pleasing environment. Enjoy the calming sounds of nature as you cultivate your land and witness the growth of your vibrant forest. Timber Tales Clicker provides a perfect escape for players seeking a zen-like gaming experience.</p>
			<p>Get ready to click, sow, harvest, and build your way to farming greatness in Timber Tales Clicker! Are you up for the challenge? Start your farming adventure now!</p>

			<Link to={'/game'}>Great, let's play!</Link>
		</div>
	);
};

export default AboutSection;
