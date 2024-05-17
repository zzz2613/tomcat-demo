define(["ezCtrl"], function(ezCtrl) {

	"use strict";
	
	// set controller name
	var exports = {
		controller : "controller/usb/USBHeaderSrchController"
	};
	
	// get controller object
	var ctrl = new ezCtrl.controller(exports.controller);
	
	// create object function
	
	// set model
	ctrl.model = {
		id : {
			btn_hSrch : {
				event : {
					click : function(){
						if(jQuery.trim( jQuery("#headerQ").val() ).length == 0){
							alert("검색어를 입력해주세요");
							jQuery("input[name=headerQ]").val("").focus();
							jQuery(".autoArea").hide();
							return false;
						} else{
							var headerQ = jQuery("#headerQ").val().replace(/ /g,'+');
							location.href="/utility/search/list.do?q="+headerQ;
						}				
					}
				}
			},
						
			headerQ : {
				event : {
					keyup : function(e){	
												
						if(e.keyCode === 13)
			            {
							if(jQuery.trim( jQuery("#headerQ").val() ).length == 0){
								alert("검색어를 입력해주세요");
								jQuery("input[name=headerQ]").val("").focus();
								jQuery(".autoArea").hide();
								return false;
							} 
							else{
								var headerQ = jQuery("#headerQ").val().replace(/ /g,'+');
								location.href = "/utility/search/list.do?q="+headerQ;								
							}
			            }
						
						if(jQuery(this).val().length == 0){
							jQuery(".autoArea").hide();
						}
						
					}					
				}
			}			
		},
		classname : {
			hSrchBt : {
				event : {
					click : function () {
						jQuery("input[name=headerQ]").val("");
						jQuery("input[name=headerQ]").focus();
						jQuery(".autoArea").hide();
					}
				}
			}
		},
		immediately : function() {
			
			jQuery( "#headerQ" ).autocomplete({		
				source: function(request, response) {
					var headerQ = jQuery("#headerQ").val();
					if(headerQ.length > 2){
						headerQ = headerQ.substr(0,2);
					}
					
					$.ajax({
						type:"post",
						url: "/utility/search/relKeyword.ajax",    
						data: { "q" : headerQ },
						dataType: "json",				          		  
						success: function(data) {
														
							var html = "";
							for(var i = 0; i<data.rtnMap.length; i++) {
								if(jQuery.trim( jQuery("#headerQ").val() ).length == 0){
									jQuery(".autoArea").hide();									
								}
								
								
								var relKeyword = data.rtnMap[i].relKeyword.replace(/ /g,'+');
								
								var url = "javascript:location.href='/utility/search/list.do?q="+relKeyword+"'";										   		
								html += "<p style=\"cursor:pointer\" onclick=\""+url+"\">"+data.rtnMap[i].relKeyword+"</p>";								
							}
							
							if(html == "")
							{
								jQuery(".autoArea").hide();
							}
							else
							{
								jQuery(".autoArea").show();
							}
							
							jQuery(".autoArea .inner").html(html);
						}				          		  
					});
				},
				messages: {
					noResults: '',
					results: function() {}
				},					            
				minLength : 1,				
			});//헤더 연관 검색어 자동완성
			
			window.ctrl = ctrl;
		}
	};

	// execute model
	ctrl.exec();

	return ctrl;
});