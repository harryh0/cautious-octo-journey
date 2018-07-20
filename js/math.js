class Point {
    constructor(x=0.0, y=0.0, points={}) {
        if (!points) {
            this.x = points.x;
            this.y = points.y;
        } else {
            this.x = x;
            this.y = y;
        }
    }

    add(point) {
        this.x += point.x;
        this.y += point.y;
    }
}

class Matrix3x3 {
    constructor() {
        this.matrix = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ] 
    }

    // multiplies this.matrix x m.matrix
    multiply(m) {
        var output = new Matrix3x3();
        output.matrix = [
            this.matrix[Matrix3x3.M00] * m.matrix[Matrix3x3.M00] + this.matrix[Matrix3x3.M01] * m.matrix[Matrix3x3.M01] + this.matrix[Matrix3x3.M02] * m.matrix[Matrix3x3.M20], 
            this.matrix[Matrix3x3.M00] * m.matrix[Matrix3x3.M01] + this.matrix[Matrix3x3.M01] * m.matrix[Matrix3x3.M11] + this.matrix[Matrix3x3.M02] * m.matrix[Matrix3x3.M21], 
            this.matrix[Matrix3x3.M00] * m.matrix[Matrix3x3.M02] + this.matrix[Matrix3x3.M01] * m.matrix[Matrix3x3.M12] + this.matrix[Matrix3x3.M02] * m.matrix[Matrix3x3.M22],
            
            this.matrix[Matrix3x3.M10] * m.matrix[Matrix3x3.M00] + this.matrix[Matrix3x3.M11] * m.matrix[Matrix3x3.M10] + this.matrix[Matrix3x3.M12] * m.matrix[Matrix3x3.M20], 
            this.matrix[Matrix3x3.M10] * m.matrix[Matrix3x3.M01] + this.matrix[Matrix3x3.M11] * m.matrix[Matrix3x3.M11] + this.matrix[Matrix3x3.M12] * m.matrix[Matrix3x3.M21], 
            this.matrix[Matrix3x3.M10] * m.matrix[Matrix3x3.M02] + this.matrix[Matrix3x3.M11] * m.matrix[Matrix3x3.M12] + this.matrix[Matrix3x3.M12] * m.matrix[Matrix3x3.M22],
            
            this.matrix[Matrix3x3.M20] * m.matrix[Matrix3x3.M00] + this.matrix[Matrix3x3.M21] * m.matrix[Matrix3x3.M10] + this.matrix[Matrix3x3.M22] * m.matrix[Matrix3x3.M20], 
            this.matrix[Matrix3x3.M20] * m.matrix[Matrix3x3.M01] + this.matrix[Matrix3x3.M21] * m.matrix[Matrix3x3.M11] + this.matrix[Matrix3x3.M22] * m.matrix[Matrix3x3.M21], 
            this.matrix[Matrix3x3.M20] * m.matrix[Matrix3x3.M02] + this.matrix[Matrix3x3.M21] * m.matrix[Matrix3x3.M12] + this.matrix[Matrix3x3.M22] * m.matrix[Matrix3x3.M22]
        ];
        return output;
    }

    transition(x, y) {
        var output = new Matrix3x3();
        output.matrix = [
            this.matrix[Matrix3x3.M00],
            this.matrix[Matrix3x3.M01],
            this.matrix[Matrix3x3.M02],

            this.matrix[Matrix3x3.M10],
            this.matrix[Matrix3x3.M11],
            this.matrix[Matrix3x3.M12],
            
            x * this.matrix[Matrix3x3.M00] + y * this.matrix[Matrix3x3.M10] + this.matrix[Matrix3x3.M20],
            x * this.matrix[Matrix3x3.M01] + y * this.matrix[Matrix3x3.M11] + this.matrix[Matrix3x3.M21],
            x * this.matrix[Matrix3x3.M02] + y * this.matrix[Matrix3x3.M12] + this.matrix[Matrix3x3.M22]
        ];
        return output;
    }

    scale(x, y) {
        var output = new Matrix3x3();
        output.matrix = [
            this.matrix[Matrix3x3.M00] * x,
            this.matrix[Matrix3x3.M01] * x,
            this.matrix[Matrix3x3.M02] * x,

            this.matrix[Matrix3x3.M10] * y,
            this.matrix[Matrix3x3.M11] * y,
            this.matrix[Matrix3x3.M12] * y,

            this.matrix[Matrix3x3.M20],
            this.matrix[Matrix3x3.M21],
            this.matrix[Matrix3x3.M22]
        ];
        return output;
    }

    getFloatArray() {
        return new Float32Array(this.matrix);
    }

    flipX() {
        
    }
}

Matrix3x3.M00 = 0;
Matrix3x3.M01 = 1;
Matrix3x3.M02 = 2;
Matrix3x3.M10 = 3;
Matrix3x3.M11 = 4;
Matrix3x3.M12 = 5;
Matrix3x3.M20 = 6;
Matrix3x3.M21 = 7;
Matrix3x3.M22 = 8;
