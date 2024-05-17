define(["ezCtrl"], function(ezCtrl) {

	"use strict";
	
	// set controller name
	var exports = {
		controller : "controller/cod/CODEventController"
	};
	
	// get controller object
	var ctrl = new ezCtrl.controller(exports.controller);
	
	// create object function
	
	// set model
	ctrl.model = {
		id : {
			
		},
		classname : {
			bfIcon : {
				event: {
					click : function(){
						$('.bfIconDiv').css('display', 'none');
						jQuery("input[name=event_param]").val("Y");
						jQuery("#frm_event").attr("action","/his/event/RenewalEvent_201801.do");
						
						window.open('','eventView','');
						
						jQuery("#frm_event").attr("method","post");										
						jQuery("#frm_event").attr("target","eventView");										
						jQuery("#frm_event").submit();	
					}
				}
			}
		},
		immediately : function() {
			var page = ctrl.obj.data("page");
			if(page == "eventwrite"){
				jQuery("#frm").validation({
					msg : {
						empty : {						
							names :{
								prvcyYn : "개인정보 수집 및 이용 동의에 동의해주세요",
								mktYn : "개인정보 마케팅 및 광고 활용 동의에 체크해주세요."
							}
						}					
					},
					
					after : function() {
						jQuery.ajax({
							type : "post",
							url : "./insertPopEvent.ajax",
							dataType : "json",
							data : 
							{
								"name" : jQuery("#name").val(),
								"company" : jQuery("#company").val(),
								"deptName" : jQuery("#deptName").val(),
								"tel" : jQuery("#tel").val(),
								"email" : jQuery("#email").val(),
								"url" : document.referrer,
								"mktYn" : jQuery("input[name='mktYn']:checked").val(),
								"prvcyYn" : jQuery("input[name='prvcyYn']:checked").val(),
								"eventParam" : "Y"
							},
							success: function(r) {									
								var status = r.status;
								
								if(status == "Y")
								{
									alert("응모가 완료되었습니다.");
								}else{
									alert("오류가 발생했습니다.");
									
								}									
							},
							error : function(xhr, ajaxSettings, thrownError) 
							{
								alert("잠시후 다시 시도 바랍니다.");									
							},
							complete : function (){
								window.close();
							}							
						});
						return false;	
					},
					
					submitBtnClass : "submit"
				});
			}
		}
	};

	// execute model
	ctrl.exec();

	return ctrl;
});