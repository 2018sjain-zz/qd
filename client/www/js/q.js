var isHost = false
var event_part_of = ""
var isUserInQ = true
var queue_size = 0
var user_place = 0
var size_and_place = {}
var user_ven_id = 0
function getPlace(){
    hasura.data.query({
    type: 'select',
    args: {
      table: 'user_queue_postion',
      columns: ['*']
    }},
    (data) => { console.log(data[0]["position"]);
      user_place = data[0]["position"]
    },
    (error) => { console.log(error); }
  );
}

function isHostFunction(){
  if(hasura.user.roles.length > 0)
  {
    isHost = true
  }
}

function userInQ(){
  hasura.data.query({
  type: 'select',
  args: {
    table: 'user_queue_position',
    columns: ['*']
  }},
  (data) => { console.log(data[0]["position"]);
    if(data.length == 0)
    {
      console.log("user not in any q")
      isUserInQ = false
    }
    else {
      data[0]["position"]
      user_ven_id = data[0]["venue_id"]
      hasura.data.query({
      type: 'select',
      args: {
        table: 'queue_length',
        columns: ['*'],
        where: {"venue_id" : user_ven_id}
      }},
      (data) => {
        queue_size = data[0]["count"]
        size_and_place = {user_place,queue_size}

        // $("#user-place").text(data[0]["position"]);
      },
      (error) => { console.log(error); }
    );
    }
    // $("#user-place").text(data[0]["position"]);
  },
  (error) => { console.log(error); }
);
}

function deleteUser()
{
  hasura.data.query({
    args:{
    table:"user_queue_postion",
    columns: [
      "user_id"
    ],
    where: {"position":1,"venue_id":user_ven_id}
  },
  "type": "select"
},(data)=> {
  userid_dropped = data[0]["user_id"]

  hasura.data.query({
  type: 'delete',
  args: {
    table: 'venue_queue_user',
    columns: ['*'],
    where: {"user_id":userid_dropped,"venue_id":user_ven_id}
  }},
  (data) => { console.log(data);
  },
  (error) => { console.log(error); }
);




})
}
