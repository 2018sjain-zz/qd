function get_venues(){
    hasura.data.query({
    type: 'select',
    args: {
      table: 'qd_venues',
      columns: ['*']
    }},
    (data) => { console.log(data);
      venue_json = data
      for(var i = 0;i<venue_json.length;i++)
      {
        $("#fillin_venue").append("<li class=\"list-item list-item--tappable\" ><div class=\"list-item__center\">" + venue_json[i].venue_name + "</div><div class=\"list-item__right\"><div class=\"list-item__label\">" + venue_json[i].vicinity + " mile(s) away</div></div>  </li>")
      }
      return data
    },
    (error) => { console.log(error);

    }
  );
}
function inject_venues(){
  x = get_venues();
  for(var i = 0;i<x.length;i++)
  {

  }
}
