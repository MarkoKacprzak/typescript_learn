/**
 * classes
 */

export class Point {
    protected x: number;
    protected y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    log() {
        console.log(this.x + ' ' + this.y);
    }
}

export class Point3d extends Point {
    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }
    add(point: Point3d) {
        var newPoint = super.add(point);
        return  new Point3d(newPoint.x, newPoint.y, this.z + point.z);
    }
    log() {
        console.log(this.x + ' ' + this.y + ' ' + this.z);
    }
}
