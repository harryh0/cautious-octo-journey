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

		//this.spriteList = []
		
	    //this.sprite = new Sprite(this.gl, "img/v2.1/adventurer-1.3-Sheet.png", vs, fs, {width : 50, height: 37});
		//this.sprite = new Sprite(this.gl, "img/v2.1/ind_sprites/adventurer-attack1-00-1.3.png" , vs, fs, {width: 50, height: 37});

		this.rogue = new Character(this.gl, "img/v2.1/adventurer-1.3-Sheet.png", vs, fs, {width : 50, height : 37}, new Point(), new Point(0, 1));
		this.spritePos = new Point();

		this.spriteFrame = new Point();

		// var m = new Matrix3x3();
		// m.matrix[Matrix3x3.M00] = 3;
		// var n = new Matrix3x3();

		// var o = m.multiply(n);
		// console.log(o);
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
		
		// this.spriteFrame.y = 1;
		// const date = new Date();
		// this.spriteFrame.x = (date * 0.005) % 6;
		//const some_alpha = (Math.sin(date * 0.005) / 2.0) + 0.5;

		
		// this.spritePos.x = (this.spritePos.x + 1) % 256
		
		this.rogue.render({alpha : 1});
		//this.sprite.render(this.spritePos, this.spriteFrame, some_alpha);

		this.gl.flush();
	}
}