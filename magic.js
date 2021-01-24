

let stock_graph, house_graph;

$( function() {
  $( "#input_investment" ).slider(
      {   max: 400000,
          min: 10000,
          change: update_all,
          step:500,
          slide: update_all
      }
  );


  $( "#input_years" ).slider(
      {   max: 30,
          min: 0,
          change: update_all,
          slide: update_all
      }
  );
  $( "#input_mortgage" ).slider(
      {   
          min: 200,
          max: 50000,
          step:50,
          change: house_calc,            
          slide: house_calc
      }
  );

  $('#input_rent').slider(
      {
          min:200,
          max: 50000,
          step:50,
          change:house_calc,
          slide: house_calc
      }
  )

  $( "#input_percent" ).slider(
      {   max: 20,
          min: 0,
          step:.5,
          change: stock_calc,
          slide: stock_calc
      }
  );


  $( "#input_appreciation" ).slider(
      {   max: 30,
          min: 0,
          step:.5,
          change: house_calc,
          slide: house_calc
          
      }
  );

  $( "#input_vacancy" ).slider(
      {   max: 100,
          min: 0,
          step:.5,
          change: house_calc,
          slide: house_calc
      }
  );

  $( "#input_maintenance" ).slider(
      {   max: 100000,
          min: 0,
          step:50,
          change: house_calc,
          slide: house_calc
      }
  );

  // functions for the chart 
  stock_graph = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'lines+markers',
  name: 'Stocks'
  
  };

  house_graph = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'lines+markers',
  name: 'Real Estate'
  };

  var layout = {
    title:'Adding Names to Line and Scatter Plot'
  };
  
  let data = [stock_graph, house_graph];

  Plotly.newPlot('chart', data, layout);

} );
function update_all(){

  house_calc()
  stock_calc()

  let years = $("#input_years").slider('value')
  let investment_amount = $("#input_investment").slider('value')
  let house_price = investment_amount * 5

  $( "#amount" ).text( "$" + investment_amount);
  $("#price").text("$" + house_price );
  $( "#output_years" ).text( "Number of Years  " + years );
}
// stock calculation results
function house_calc(){
  // let funds = $("#input_investment").slider('value')
  let down_payment = $("#input_investment").slider('value')
  let original_house_price = down_payment * 5
  let monthly_payment = $("#input_mortgage").slider('value')
  let rental_income = $("#input_rent").slider('value')
  let years =  $("#input_years").slider('value')
  let appreciation_perc = $('#input_appreciation').slider('value')
  let vacancy_rate = $("#input_vacancy").slider('value')
  let yearly_maintenance = $("#input_maintenance").slider('value')

  $( "#output_maintenance" ).text( "Yearly Maintenance Amount  " + yearly_maintenance );
  $( "#output_vacancy" ).text( "Yearly Vacancy Rate  " + vacancy_rate );
  $( "#output_appreciation" ).text( "Yearly Appreciation  " + appreciation_perc);
  $( "#output_rent_income" ).text( "Rental Income  " + rental_income);
  $( "#monthlyPayment" ).text( "$" + monthly_payment );
  

        
  // console.log(house_price, rental_income)
  let occupancy_rate =( 100 - vacancy_rate) / 100.0;

  let yearly_cost = monthly_payment * 12 + yearly_maintenance;
  let yearly_income = rental_income * 12 * occupancy_rate;
  
  // console.log(yearly_income, yearly_cost)

  // appreciation calculation

  let current_year = 0
  let house_price=original_house_price;
  let cumulative_yearly_gain = 0
  let house_year = []
  let house_gain = []
  let gain_this_year = 0
  while( current_year < years) {
      one_year_interest = house_price * appreciation_perc / 100.0;
      house_price = house_price + one_year_interest;
      cumulative_yearly_gain = cumulative_yearly_gain + yearly_income - yearly_cost;

      let cost_of_sales = .06 * house_price;
      gain_this_year = house_price - original_house_price - cost_of_sales + cumulative_yearly_gain;
      house_gain.push(gain_this_year);
      house_year.push(current_year);
      current_year +=1
      console.log('gain this year ' + gain_this_year)
      

  }
  console.log(house_year, house_gain)
  console.log('yearly income less cost' + (yearly_income-yearly_cost));
  house_graph['x']=house_year;
  house_graph['y']=house_gain

  Plotly.redraw('chart')

  // let net_price_gain = house_price - original_house_price;
  // let cost_of_sales = .06 * house_price;
  // let total_cost = yearly_cost * years;
  // let total_income = yearly_income * years;
  // console.log('yearly income ' + yearly_income + 'total income ' + total_income + 'years' + years);
  let total_net = gain_this_year;

  console.log(total_net)
  $('#house_calculation_results').text(total_net)



}

function stock_calc(){
  // stock_calculation_results

  let funds = $("#input_investment").slider('value')
  let percent =  $("#input_percent").slider('value')
  let years =  $("#input_years").slider('value')
  $( "#output_percent" ).text( "Percentage  " +  percent );
  let percentage = percent * .01


  let total_money = funds
  let current_year = 0
  let each_year=[]
  let each_return=[]
  while( current_year < years) {
      one_year_interest = total_money * percentage
      total_money = total_money + one_year_interest
      each_return.push(total_money - funds)
      each_year.push(current_year)
      current_year +=1
      

  }
  console.log(each_return + ' ' + each_year)
  stock_graph['y']=each_return;
  stock_graph['x']=each_year;
  Plotly.redraw('chart')

  $("#stock_calculation_results").text(total_money - funds)

//    console.log(total_money)
 console.log(funds,percentage, years )


}
//  button functions 
// function historical_market(){
//   $("#input_investment").slider('value', 50000)
//   $("#input_vacancy").slider('value', 1.5)
//   $("#input_mortgage").slider('value', 1200)
//   $("#input_maintenance").slider('value', 750)
//   $("#input_rent").slider('value', 1200)
//   $("#input_appreciation").slider('value', 3.5)
//   $("#input_years").slider('value', 10)
//   $("#input_percent").slider('value', 8)

// }


