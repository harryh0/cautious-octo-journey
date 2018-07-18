function loop() {
	window.game.update();
	window.requestAnimationFrame(loop);
}

class Game {
	constructor() {
		this.canvasElm = document.createElement("canvas");
		this.canvasElm.width = 800;
		this.canvasElm.height = 600;

		this.worldSpaceMatrix = new Matrix3x3();
	
		this.gl = this.canvasElm.getContext("webgl2");
		this.gl.clearColor(241/255, 196/255, 15/255, 0.5);

		document.body.appendChild(this.canvasElm);
		
		let vs = document.getElementById("vert_01").innerHTML;
		let fs = document.getElementById("frag_01").innerHTML;

		var request = new XMLHttpRequest();
		request.open("GET", "../assets/spriteInfo/slime.json", false);
		request.send(null);
		let slimeAttributes = JSON.parse(request.responseText);


		// TODO : INITIALIZE ARRAY OR DICTIONARY OF SPRITES 
		this.rogue = new Character(this.gl, "assets/img/v2.1/adventurer-1.3-Sheet.png", vs, fs, {width : 50, height : 37});
		this.slime = this.addSprites(slimeAttributes, vs, fs);
		
		//this.slime = this.addSprites(slimeAttributes);

		this.spritePos = new Point();

		this.spriteFrame = new Point();

	}
	resize(x, y) {
		this.canvasElm.width = x;
		this.canvasElm.height= y;

		// reorient origin point to top left corner
		let wRatio = x / (y / 240);
		//this.worldSpaceMatrix = new Matrix3x3().transition(-1, 1).scale(1, -1);
		this.worldSpaceMatrix = new Matrix3x3().transition(-1, 1).scale( 2 / wRatio, -2 / 240);
	}
	update() {
		this.gl.viewport(0, 0, this.canvasElm.width, this.canvasElm.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		
		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc( this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
		
		// TODO : ITERATE THROUGH SPRITE REPRESENTATION AND RENDER EACH VALUE
		this.rogue.render({alpha : 1});
		this.slime.render();
		
		this.gl.flush();
	}

	addSprites(spriteAttributes, vs, fs) {
		// filePath, dimensions, direction, position, actions
		let filePath = spriteAttributes["filePath"];
		console.log(filePath);
		let dimensions = spriteAttributes["dimensions"];
		let position = new Point(spriteAttributes["position"]["x"], spriteAttributes["position"]["y"]);
		let direction = spriteAttributes["direction"];
		let actions = spriteAttributes["actions"];

		return new Character(this.gl, filePath, vs, fs, dimensions)
	}

}