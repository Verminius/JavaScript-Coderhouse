/* Stats */
function stats(fue, des, con, int, sab, cha) {
    this.fue = parseInt(fue);
    this.des = parseInt(des);
    this.con = parseInt(con);
    this.int = parseInt(int);
    this.sab = parseInt(sab);
    this.cha = parseInt(cha);

    this.calcularMod = function(stat) {
        return Math.floor((stat - 10) / 2);
    }
}