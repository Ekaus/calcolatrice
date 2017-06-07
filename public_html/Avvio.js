$(document).ready(function () {
	this.numeroDigitato = "0";
	this.numeroSalvato = "";
	this.puntoInserito = false;
	this.operatore = "";

	this.calcola = function () {
		var primo = parseFloat(that.numeroSalvato);
		var secondo = parseFloat(that.numeroDigitato);
		var risultato = 0;
		switch (that.operatore) {
			case "+":
				risultato = primo + secondo;
				$("#risul").text(risultato);
				break;
			case "-":
				risultato = primo - secondo;
				$("#risul").text(risultato);
				break;
			case "*":
				risultato = primo * secondo;
				$("#risul").text(risultato);
				break;
			case "/":
				if (secondo === 0) {
					alert("Non puoi dividere per 0");

					$("#risul").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
				} else {
					risultato = primo / secondo;
					$("#risul").text(risultato);
				}
				break;
		}
		that.numeroSalvato = risultato;
		that.numeroDigitato = "";
		$("#risul").text(risultato);
	};*/
	var that = this;

	$("#add").click(function () {
		if (!that.operatore) {
			that.numeroSalvato = that.numeroDigitato;
			that.numeroDigitato = "";
		}
		that.operatore = "+";
		//$("#primoNumero").text(that.numeroSalvato);
		//$("#operatoreScelto").text(that.operatore);
		that.puntoInserito = false;
	});
	$("#sub").click(function () {
		if (!that.operatore) {
			that.numeroSalvato = that.numeroDigitato;
			that.numeroDigitato = "";
		}
		that.operatore = "-";
		//$("#primoNumero").text(that.numeroSalvato);
		//$("#operatoreScelto").text(that.operatore);
		that.puntoInserito = false;
	});
	$("#times").click(function () {
		if (!that.operatore) {
			that.numeroSalvato = that.numeroDigitato;
			that.numeroDigitato = "";
		}
		that.operatore = "*";
		//$("#primoNumero").text(that.numeroSalvato);
		//$("#operatoreScelto").text(that.operatore);
		that.puntoInserito = false;
	});
	$("#div").click(function () {
		if (!that.operatore) {
			that.numeroSalvato = that.numeroDigitato;
			that.numeroDigitato = "";
		}
		that.operatore = "/";
		//$("#primoNumero").text(that.numeroSalvato);
		//$("#operatoreScelto").text(that.operatore);
		that.puntoInserito = false;
	});
	$("#clear").click(function () {
		that.numeroDigitato = "0";
		$("#risul").text(that.numeroDigitato);
	});
	$("#back").click(function () {
		that.numeroDigitato = that.numeroDigitato.substring(0, that.numeroDigitato.length - 1);
		if (that.numeroDigitato === "")
			that.numeroDigitato = "0";
		if (that.numeroDigitato.indexOf(".") === -1)
			that.puntoInserito = false;
		$("#risul").text(that.numeroDigitato);
	});
	$(".cifre").click(function () {
		if (that.puntoInserito && this.innerText == ".") {
			alert("Hai già inserito un punto");
		} else if (that.numeroDigitato == "0") {
			that.numeroDigitato = "" + (this.innerText);
		} else {
			that.numeroDigitato = that.numeroDigitato + "" + (this.innerText);
			if (this.innerText == ".") {
				that.puntoInserito = true;
			}
		}
		$("#risul").text(that.numeroDigitato);
	});
	$("#uguale").click(function () {
		if (!that.operatore) {
			alert("Non hai selezionato un operatore");
		} else {
			var primo = parseFloat(that.numeroSalvato);
			var secondo = parseFloat(that.numeroDigitato);
			var risultato = 0;
			switch (that.operatore) {
				case "+":
					risultato = primo + secondo;
					$("#risul").text(risultato);
					break;
				case "-":
					risultato = primo - secondo;
					$("#risul").text(risultato);
					break;
				case "*":
					risultato = (primo * 10) * (secondo * 10) / (10 * 10); //moltiplicazioni e divisioni per 10 necessarie per evitare problemi di arrotondamento con il float
					$("#risul").text(risultato);
					break;
				case "/":
					if (secondo === 0) {
						alert("Non puoi dividere per 0");
						$("#risul").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300); //l'area del risultato lampeggia
					} else {
						risultato = primo / secondo;
						$("#risul").text(risultato);
					}
					break;
			}
			that.numeroSalvato = "";
			that.numeroDigitato = "";
			that.operatore = "";
			$("#risul").text(risultato);
		}
	});
});