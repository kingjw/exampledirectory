//지원 폼에서 입력받은 정보를 ajax 통신으로 넘기는 자바스크립트입니다.
window.onload=function(){
  document.getElementById('applyButton').onclick=function(){//지원 버튼 클릭
    var name = $('#name').val();
    var major = $('#major').val();
    var student_number = $('#student_number').val();
    var grade = $('#grade').val();
    var phone_number = $('#phone_number').val();
    var apply_reason = $('#apply_reason').val();
    var want_service = $('#want_service').val();
    var project = $('#project').val();
    var email = $('#email').val();
    var home = $('#home').val();

    /////////////////////////// gender ///////////////////////////
    var genderRadio = document.getElementsByName('gender');//성별을 체크하는 라디오버튼
    var gender;//성별 값을 저장해주는 변수
    if(genderRadio[0].checked){//'남' 값의 라디오버튼을 클릭했을 시
      gender = genderRadio[0].value;// '남' 값 저장
    }
    else{//'여' 값 라디오 버튼 클릭 시
      gender = genderRadio[1].value;//'여' 값 저장
    }
    //////////////////////////////////////////////////////////////

    //////////////////////// military ////////////////////////////
    var milcheck = document.getElementById('milcheck');//군필 여부 체크하는 체크박스 아이디
    var milBool = $(milcheck).prop('checked');//군필 여부 체크 확인 값
    var military;//군필, 미필이라는 텍스트를 저장하기 위한 변수
    if(milBool){//milBool 값이 true, 즉 군필 여부에 체크했으면
      military = '군필';//군필이라는 값 저장
    }
    else {//체크 안했으면
      military = '미필';//미필이라는 값 저장
    }
    /////////////////////////////////////////////////////////////

    var data = { // 지원자가 입력한 정보들
      'name' : name,
      'major' : major,
      'student_number' : student_number,
      'grade' : grade,
      'phone_number' : phone_number,
      'apply_reason' : apply_reason,
      'want_service' : want_service,
      'project' : project,
      'email' : email,
      'home' : home,
      'gender' : gender,
      'military' : military
    };
    console.log(data);
    $.ajax({ // ajax 통신으로 지원자 입력한 정보를 서버에 보낸다.
          type:'POST',
          url:'/apply/goApply',
          contentType:'application/x-www-form-urlencoded; charset=UTF-8',
          cache:false,
          dataType:'json',
          data:data,
          success:function(result){
            if(result['result']=='success'){
              alert('지원 접수 완료 !');
              location.reload();//지원 완료 했으면 페이지 새로고침
            }//result if
          },
          error:function(error){
          }
    });//ajax
  }//apply button click
}//onload
