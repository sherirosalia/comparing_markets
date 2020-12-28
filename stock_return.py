def stock_percentage(funds, percent, years):
    decimal_percent = percent * .01
    interest_each_year = []
    for i in range(years): 
        # print(f'initial values: {funds}, {percent}, {years}') 
        # print(i)
        one_year_interest = funds * decimal_percent
        # print(one_year_interest)
        funds = funds + one_year_interest 

        yearly_value={i :  funds, }
        
        interest_each_year.append(yearly_value)
        # print(interest_each_year)10

        # total_interest = sum(interest_each_year)    
    return interest_each_year

# stock_percentage(132000,18,6)  
funds=int(input('deposit amount in integer:  '))
percent=float(input('percent interest in whole number:  '))
years=int(input('number of whole years(integer):  '))

print(stock_percentage(funds, percent, years) )

# price=float(input('purchase amount in integer:  '))
# mortgage=float(input('monthly mortgage payment including taxes, hoa, utilities and insurance:  '))
down_payment=float(input('down payment in decimal:  '))
price = down_payment * 5
print(f'we are assuming the purchase price to be {price:.2f}')
# interest=float(input('interest rate: '))
mortgage=float(input('monthly mortgage payment including taxes, hoa, utilities and insurance:  '))
years=int(input('number of years of ownership (whole integer):  '))
appreciation_rate=float(input('appreciation estimate:  '))
rental_income=float(input('monthly rental income:  '))

# def rental_purchase(price, mortgage, years):
# price = down_payment * 5
# print(f'we are assuming the purchase price to be {price:.2f}')
yearly_cost=mortgage * 12
yearly_income=rental_income * 12
new_value = price
for year in range(years):

    yearly_appreciation = new_value * appreciation_rate * .01
    new_value = new_value + yearly_appreciation

# print(new_value)
gain = new_value - price
cost = yearly_cost * years
income = yearly_income * years
commission_cost = new_value * .06
total_gain= gain + income - cost - commission_cost
print(total_gain)






''' Stocks vs. Real Estate


Real Estate commission
Income tax rate 
Property tax 
Inflation
Vacancy rate 5%
Mortgage 
Down payment
Tax break? Depreciation? 1041 xchange?
Ira 
'''