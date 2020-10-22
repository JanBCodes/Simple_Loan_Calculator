function main()
{
    const loanCal=document.querySelector("#cal_button");

    loanCal.addEventListener("click", function(){

        const user_loan_amt=document.querySelector("#loan_amt");
        let loan_amt=parseFloat(user_loan_amt.value); //DISPLAY to USER
        
        const user_loan_term=document.querySelector("#loan_term");
        let loan_term=parseInt(user_loan_term.value);
        let term_mths=(loan_term*12); //DISPLAY to USER
    
        const user_int_rate=document.querySelector("#int_rate");
        let int_rate=parseFloat(user_int_rate.value); //DISPLAY to USER

        let int=((int_rate/100)/12);//A
        let mth_int=(int+1);//B
        let c=(Math.pow(mth_int,-term_mths));//C
        let d=(1-c);//D
        let user_mth_int_rate=(int*loan_amt);//E 
        let mth_instal=(user_mth_int_rate/d);//F  DISPLAY to USER
        
        const displayBox1=document.querySelector("#results1");
        displayBox1.innerHTML=`Loan Amount: $${loan_amt.toFixed(2)}`
        displayBox1.style.color="#fc0000"

        const displayBox2=document.querySelector("#results2");
        displayBox2.innerHTML=`Int. Rate: ${int_rate.toFixed(2)}%`
        displayBox2.style.color="#fc0000"

        const displayBox3=document.querySelector("#results3");
        displayBox3.innerHTML=`Terms (years): ${loan_term}`
        displayBox3.style.color="#fc0000"

        const displayBox4=document.querySelector("#results4");
        displayBox4.innerHTML=`Monthly Payments: $${mth_instal.toFixed(2)}`
        displayBox4.style.color="#fc0000"
        
        user_loan_amt.value="";
        user_int_rate.value="";
        user_loan_term.value="";
        user_loan_amt.focus();
        
    });    
}
main();