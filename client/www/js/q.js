function getPlace(){
    hasura.data.query({
    type: 'select',
    args: {
      table: 'user_queue_postion',
      columns: ['*']
    }},
    (data) => { console.log(data[0]["position"]);
      $("#user-place").text(data[0]["position"]);
    },
    (error) => { console.log(error); }
  );
}
