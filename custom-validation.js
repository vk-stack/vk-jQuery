/******************************* Numbers Only *******************************/
    
    jQuery.fn.ForceNumericOnly = function(){ return this.each(function()
    {
         $(this).keydown(function(e)
        {
           var key = e.charCode || e.keyCode || 0;         
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return ( key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || /*key == 190 ||*/ (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
            });
        });
    };

    //==> Add class to form input 
    
        $(".numberOnly").ForceNumericOnly();
    
    //==> End  
    
/******************************* End Numbers Only *******************************/

/******************************* Aplha Only *******************************/
    
    $('.alphaonly').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-zA-Z ]/g,'') ); }
    );

/******************************* End Aplha Only *******************************/

/******************************* Name Validation Space *******************************/

    $.validator.addMethod("noSpace", function(value, element) { 
        a = value[0] != " ";
        b = value[1] != " ";
        c = value[2] != " ";
        return a && b && c ; 
    }, "No space please and don't leave it empty");

/******************************* End Name Validation Space *******************************/


/******************************* Mobile Validation *******************************/

    $.validator.addMethod("mobileValidation", function(value, element) 
    { 
        a = !/^[789]\d{9}$/.test(value) ? false : true;
        return a;
    }, "Mobile number invalid");

/******************************* End Mobile Validation *******************************/


/******************************* Aadhar Card Validation *******************************/

    $.validator.addMethod("aadharValidation", function(value, element) 
    { 
        a = !/^[2-9]{1}[0-9]{3} [0-9]{4} [0-9]{4}$/.test(value) ? false : true;
        return a;
    
    }, "Aadhar number invalid");

/******************************* End Aadhar Card Validation *******************************/

/******************************* Pan Card Validation *******************************/

    $.validator.addMethod("panCardValidation", function(value, element) 
    { 
        a = !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? false : true;
        return a;
    
    }, "Pan Card number invalid");


/******************************* Voter Card Validation *******************************/
    $.validator.addMethod("voterIdCardValidation", function(value, element) 
    { 
        a = !/^([A-Z]){3}([0-9]){7}?$/g.test(value) ? false : true;
        return a;
    
    }, "Voter Id Card Number Invalid");

/******************************* End Voter Card Validation *******************************/

/******************************* Ajax Form Code *******************************/

// var expform = document.getElementById('passport_renewal_form');
// var fd = new FormData(expform);
// $.ajax({
//     type: "POST",
//     url: "<?php echo base_url('action/passport_renewal_form'); ?>",
//     data: fd,
//     dataType: 'json',
//     success: function (data) {
//         if(obj.status == 'false')
//         {
//             window.location.href = '<?= base_url('login');?>';
//         }
//         else if(obj.status == 'success')
//         {
//             window.location.href = '<?= base_url('payment');?>';
//         }
//     },
//     error: function () {
//         alert('Some Error Occured.');
//     }
// });

/******************************* End Ajax End Code *******************************/

/******************************* Ajax Send Parameters Code *******************************/
// $.ajax({
//     type: "POST",
//     url: "<?php echo base_url('action/passport_renewal_form'); ?>",
//     data: { param1: value1, param2: value2 },
//     dataType: 'json',
//     contentType: 'application/json; charset=utf-8',
//     success: function (data) {
//         if(obj.status == 'false')
//         {
//             window.location.href = '<?= base_url('login');?>';
//         }
//         else if(obj.status == 'success')
//         {
//             window.location.href = '<?= base_url('payment');?>';
//         }
//     },
//     error: function () {
//         alert('Some Error Occured.');
//     }
// });
/******************************* End Ajax Send Parameters Code *******************************/


/******************************* Simple Form Validation Structure *******************************/
// ======================================

// $("#form_id").validate({
//     rules: {
//         name: {
//             required: true,  
//             minlength : 3,
//             maxlength : 25,
//             noSpace   : true
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         mobile: {
//             required: true,
//             minlength: 10,
//             maxlength:10,
//             mobileValidation:$('#mobile').val()
//         },
//         pan_card: {
//             required: true,
//             panCardValidation: $('#pan_card').val()
//         },
//         voter_id: {
//             required: true,
//             voterIdCardValidation : $('#voter_id').val()
//         },
//         aadhar_card_id: {
//             required: true,
//             aadharValidation : $('#aadhar_card_id').val()
//         },        
//     },
//     messages: {
//         name: {
//             required: "Please provide a name",
//             minlength: "Your name must be at least 3 characters long"
//           },
//         email: "Please enter a valid email address",
//     },
//     submitHandler: function(form) {
//          form.submit();
//         }
//     });    
// ======================================

/* ===> Simple Form Validation Structure 

#####################################
    
1. Prevents the form from submitting and tries to help setting up the validation with warnings about missing methods and other debug messages.
    
    $("#myform").validate({
        debug: true
    });

#####################################

#####################################
    
2. Submits the form via Aja
    
    $("#myform").validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit();
        }
    });

#####################################

#####################################
    
3. se submitHandler to process something and then using the default submit
    
$("#myform").validate({
  submitHandler: function(form) {
    
    form.submit(); 
    
        OR

     $("#myform").submit();
  }
});

#####################################


/* ===> End Simple Form Validation Structure 


/******************************* End Simple Form Validation Structure *******************************/

/******************************* Common Form jquery fuctions *******************************/

// $('button').click(function(){
//     $(this).val();
//     $('button').val();
// });

// $("input").keydown(function(e){
//     $(this).val();
//     $('input').val();
// });

// $("input").keyup(function(e){
//     $(this).val();
//     $('input').val();
// });

// // ====> Select
// $('select').on('change', function() {
  
//     alert( this.value );
//     alert( $(this).val());
    
//     alert($('select').is(':selected'));
    
//     $(this).prop("selected");
//     $(this).prop("selected", true);
//     $(this).prop("selected", false);
    
//      $(this).attr("data-id");
//      $(this).attr("data-id", '1');
     
//      $(this).data("id");
//      $(this).data("id", '1');
     
     
//   });
  
//   $('#mySelectBox option').each(function() {
//       if ($(this).prop("selected") == true) {
//          // do something
//       } else {
//          // do something
//       }
//   });
// // ====> End Select

// // ====> Radio or Checkbox
// alert($('input[type="radio"]').is(':checked'));
    
// $('input[type="radio"]').on('change', function() {
  
//     alert( this.value );
//     alert( $(this).val());
    
//     $(this).prop("checked");
//     $(this).prop("checked", true);
//     $(this).prop("checked", false);
    
//      $(this).attr("data-id");
//      $(this).attr("data-id", '1');
     
//      $(this).data("id");
//      $(this).data("id", '1');
    
//   });
// // ====> End Radio or Checkbox

// // ====> Check and Uncheck All
// function checkAllCheckBox()
// {
//        $(".check_").attr ( "checked" ,"checked" );
// }

// function uncheckAllCheckBox()
// {
//         $(".check_").removeAttr('checked');
// }
// // ====> End Check and Uncheck All

// // ====> Check all checkbox is checked or not
// $('.check_').each(function(){
//     alert(this.checked);
//     alert(this.value);
//     alert($(this).is(':checked'));
// });
// // ====> End Check all checkbox is checked or not
 
/******************************* End Common Form jquery fuctions *******************************/
