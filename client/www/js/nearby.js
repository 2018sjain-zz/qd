function get_venues(){
    hasura.data.query({
    type: 'select',
    args: {
      table: 'qd_venues',
      columns: ['*']
    }},
    (data) => { console.log(data);
      return data
    },
    (error) => { console.log(error);

    }
  );
}
