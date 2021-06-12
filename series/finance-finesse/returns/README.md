<pre>

 _______   ________  ________  __    __  _______   __    __   ______  
|       \ |        \|        \|  \  |  \|       \ |  \  |  \ /      \ 
| $$$$$$$\| $$$$$$$$ \$$$$$$$$| $$  | $$| $$$$$$$\| $$\ | $$|  $$$$$$\
| $$__| $$| $$__       | $$   | $$  | $$| $$__| $$| $$$\| $$| $$___\$$
| $$    $$| $$  \      | $$   | $$  | $$| $$    $$| $$$$\ $$ \$$    \ 
| $$$$$$$\| $$$$$      | $$   | $$  | $$| $$$$$$$\| $$\$$ $$ _\$$$$$$\
| $$  | $$| $$_____    | $$   | $$__/ $$| $$  | $$| $$ \$$$$|  \__| $$
| $$  | $$| $$     \   | $$    \$$    $$| $$  | $$| $$  \$$$ \$$    $$
 \$$   \$$ \$$$$$$$$    \$$     \$$$$$$  \$$   \$$ \$$   \$$  \$$$$$$ 
                                                                      
                                                                      
                                                                      

</pre>

## Terms

- [Systematic Risk](https://www.wallstreetmojo.com/systematic-risk) : risk inherent to the entire market
 - Macroeconomic; non-diversifiable; alias: undiversifiable risk, volatility, market risk;
 - [Inflation Risk]
 - [Interest rate Risk]
 - [Market Risk]
 - [Credit Risk](https://www.investopedia.com/terms/c/creditrisk.asp) : lender may not receive the owed principal and interest in timely manner
 - [Default Risk](https://www.investopedia.com/terms/d/defaultrisk.asp) : borrower won’t be able to make required debt payments
  - [Credit Vs Default](https://www.quora.com/What-is-the-difference-between-credit-risk-and-default-risk)
 
- Unystematic Risk : risk is unique to a specific company or industry
 - Microeconomic; alias: nonsystematic risk, specific risk, diversifiable risk, residual risk;
 - Financial Risk
 - Business Risk



## RETURNS

### WEALTH RATIO
- E / B
 - E: ENDING VALUATION, B: BEGINNING VALUATION
- Equation: 1+R = E/B

### MONEY WEIGHTED

- IRR
 - POSTIVE FLOWS = NEGATIVE FLOWS
 - [E = B x (1+IRR) + C x (1+IRR)^Wi]
 
- DIETZ
 - SIMPLE
  - [First order approximation](https://math.stackexchange.com/questions/2477599/how-do-i-find-a-first-order-approximation) applied to IRR
  - [1+R = MARGIN / B+C/2]
   - R:Return, MARGIN: Gain/ Loss, B: BEGINNING VALUATION, C: CASHFLOW
 - MODIFIED
  - B + C/2 is converted to [B + Ct x Wt]
   - Ct: CASHFLOW on period t
   - Wt: Weightage for period t [Wt = TOTAL - t / TOTAL]  
 - CF time factor
  - BMV, CF: [1+R=MARGIN/B+C/2]
  - EMV, CF: [1+R=MARGIN/B]

### TIME WEIGHTED

- alias: Classical, True
- [1+R] = (E1/B1) x (E2/E1) x .. (En/En-1) = [En / B1]
- [1+R] = (1+r1)x(1+r2)x .. (1+rn)

### HYBRID 


## RISK METRICS

### STATISTICS

- [ (X-Xmean) * (X-Xmean) / N-1  or N] VAR(x)
 - N: All observations
 - The reason dividing by n-1 corrects the bias is because we are using the *sample mean*, instead of the *population mean*, to calculate the variance. More at [Khan Academy](https://www.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap/more-standard-deviation/v/another-simulation-giving-evidence-that-n-1-gives-us-an-unbiased-estimate-of-variance)
- [ (X-Xmean) * (X-Xmean) / N-1  or N] VAR(x)
- [SQRT(R)] STANDARD DEVIATION
- [SUM(R)/n] ARITHMETIC MEAN
- [PRODUCT(R)^1/n] GEOM MEAN
- [1+R = (1+Rn)^1/n] ANNUALIZED R

### REGRESSION

- [AVG(P) = BETA*AVG(B) + ALPHA] REGRESSION LINE P:Rp, B: Rb
- [AVG(P) - BETA*AVG(B) ] ALPHA
- [COV(P,B) / VAR(B)] BETA 
- [COV(P,B) / SD(P)*SD(B)] CORRELATION COEFFICIENT
- [SQRT(R2)] CORRELATION COEFFICIENT

### RISK ADJUSTED MEASURES

- [P-B]ARITHMETIC EXCESS
- [P/B]GEOMETRIC EXCESS
- [SD(ARITHMETIC_EXCESS)] TRACKING ERROR
- [EXCESS(P) / SD(P)] SHARPE - RISK FREE RATE
- [EXCESS(P) / BETA(P)] TREYNOR - RISK FREE RATE
- [EXCESS(P) / TE(P)] INFORMATION - BENCHMARK
- [EXCESS(P) / DRAWDOWN] SORTINO - BENCHMARK
- [EXCESS(P) - BETA*EXCESS(B)] JENSEN - RISK FREE RATE
