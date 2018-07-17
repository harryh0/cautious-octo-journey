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
		this.gl.clearColor(0.4, 0.6, 1.0, 0.5);

		document.body.appendChild(this.canvasElm);
		
		let vs = document.getElementById("vert_01").innerHTML;
		let fs = document.getElementById("frag_01").innerHTML;

		// TODO : INITIALIZE ARRAY OR DICTIONARY OF SPRITES 
		this.rogue = new Character(this.gl, "assets/img/v2.1/adventurer-1.3-Sheet.png", vs, fs, {width : 50, height : 37}, new Point(), new Point(0, 1));
		this.slime = new Character(this.gl, "assets/img/Slime/slime-Sheet.png", vs, fs, {width : 32, height : 25}, new Point(1, 1), new Point());
		
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

	addSprites(sprite) {
		// parse json body to 
	}

}