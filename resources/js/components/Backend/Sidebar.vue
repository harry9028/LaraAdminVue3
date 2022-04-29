<template>
    <div>
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="true">
            
            <li class="nav-item" v-if="access_level.dashboard==1">
                <router-link to="/dashboard" class="nav-link" >
                <i class="fas fa-tachometer-alt"></i>
                <p>
                    Dashboard
                </p>
                </router-link>
            </li>
            <li class="nav-item has-treeview" v-if="access_level.pos_offline_registration.pos_offline_registration_tab==1">
                <a href="#" class="nav-link">
                    <i class="fas fa-circle"></i>
                    <p>
                        POS Offline Registrations
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="tmbill-users" class="nav-link" v-if="access_level.pos_offline_registration.pos_registration.show_tab==1">
                            <i class="fas fa-user-check"></i>
                            <p>POS Registration</p>
                        </router-link>
                        <router-link to="tmbill-app-users" class="nav-link" v-if="access_level.pos_offline_registration.captain_app.show_tab==1">
                            <i class="fas fa-user-check"></i>
                            <p>Captain APP</p>
                        </router-link>
                        <router-link to="tmbill-kitchen-app" class="nav-link" v-if="access_level.pos_offline_registration.kitchen_app.show_tab==1">
                            <i class="fas fa-user-check"></i>
                            <p>Kitchen APP</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            
            <li class="nav-item has-treeview" v-if="access_level.pos_offline_activation.pos_offline_activation_tab==1">
                <a href="#" class="nav-link">
                    <i class="fas fa-circle"></i>
                    <p>
                        POS Offline Activations
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="tmbill-product" class="nav-link" v-if="access_level.pos_offline_activation.pos_activation_keys.show_tab==1">
                        <i class="fas fa-dot-circle"></i>
                        <p>POS Activation Keys</p>
                        </router-link>
                        <router-link to="app-activation" class="nav-link" v-if="access_level.pos_offline_activation.captain_app.show_tab==1">
                        <i class="fas fa-dot-circle"></i>
                        <p>Captain APP</p>
                        </router-link>
                        <router-link to="kitchen-app-activation" class="nav-link" v-if="access_level.pos_offline_activation.kitchen_app.show_tab==1">
                        <i class="fas fa-dot-circle"></i>
                        <p>Kitchen APP</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            
            <li class="nav-item has-treeview" v-if="access_level.promocode_offline.enabled_promocode_offline_tab==1">
                <a href="#" class="nav-link">
                <i class="fas fa-circle"></i>
                <p>
                    Promocode Offline
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="promocode" class="nav-link" v-if="access_level.promocode_offline.promocode_pos.show_tab==1">
                    <i class="fas fa-dot-circle"></i>
                    <p>Promocode POS</p>
                    </router-link>

                    <router-link to="/promocode-history" class="nav-link" v-if="access_level.promocode_offline.promocode_history==1">
                    <i class="fas fa-circle"></i>
                    <p>
                        Promocode History
                    </p>
                    </router-link>
                    
                </li>
                </ul>

            </li>
        
            
            <li class="nav-item has-treeview" v-if="access_level.pos_plan_and_payment.enabled_pos_plan==1">
                <a href="#" class="nav-link">
                <i class="fas fa-circle"></i>
                <p>
                    POS Plan & Payments
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="plan" class="nav-link" v-if="access_level.pos_plan_and_payment.plan==1">
                        <i class="fas fa-dot-circle"></i>
                        <p>Plans</p>
                    </router-link>
                    <router-link to="payment" class="nav-link" v-if="access_level.pos_plan_and_payment.payment==1">
                        <i class="fas fa-rupee-sign"></i>
                        <p>Paymnets</p>
                    </router-link>
                </li>
                </ul>
            </li>
            
            <li class="nav-item has-treeview" v-if="access_level.tmchannel.enabled_tmchannel==1">
                <a href="#" class="nav-link" data-toggle="collapse">
                <i class="fas fa-circle"></i>
                <p>
                    TMChannel
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item" v-if="access_level.tmchannel.activated_users.show_tab==1">
                        <router-link to="tmchannel-registrations" class="nav-link">
                        <i class="fas fa-user-check"></i>
                        <p>Activated Users</p>
                        </router-link>
                    
                        
                    </li>
                </ul>
            </li>
            
            <li class="nav-item has-treeview" v-if="access_level.atlantic_pos.enabled_atlantic_pos==1">
                <a href="#" class="nav-link" data-toggle="collapse">
                <i class="fas fa-circle"></i>
                <p>
                    Atlantic POS
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="tmpos-registrations" class="nav-link" v-if="access_level.atlantic_pos.activated_users.show_tab==1">
                        <i class="fas fa-user-check"></i>
                        <p>Activated Masters</p>
                    </router-link>
                    <router-link to="activated-outlets" class="nav-link" v-if="access_level.atlantic_pos.activated_users.show_tab==1">
                        <i class="fas fa-user-check"></i>
                        <p>Activated Outlets</p>
                    </router-link>
                    <router-link to="atlantic-pos-tmchannel-mapping" class="nav-link" v-if="access_level.atlantic_pos.atlantic_pos_plus_tmchannel.show_tab==1">
                        <i class="fas fa-user-check"></i>
                        <p>Atlantic POS + TMChannel Mapping</p>
                    </router-link>
                    <router-link to="tmpos-enquiry" class="nav-link" v-if="access_level.atlantic_pos.demo_request.show_tab==1">
                        <i class="fas fa-comment-alt"></i>
                        <p>Demo Request</p>
                    </router-link>
                    <router-link to="live-support" class="nav-link" v-if="access_level.atlantic_pos.support_queries.show_tab==1">
                        <i class="fas fa-headset"></i>
                        <p>Support Queries</p>
                    </router-link>
                    <router-link to="tmpos-notifications" class="nav-link" v-if="access_level.atlantic_pos.atlantic_notification.show_tab==1">
                        <i class="fas fa-bullhorn"></i>
                        <p>Atlantic Notifications</p>
                    </router-link>
                    
                </li>
                </ul>
            </li>
            
            <li class="nav-item has-treeview" v-if="access_level.sms.send_sms==1">
                <a href="#" class="nav-link">
                <i class="fas fa-sms"></i>
                <p>
                    SMS
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="send-sms" class="nav-link">
                    <i class="fas fa-paper-plane"></i>
                    <p>Send SMS</p>
                    </router-link>
                </li>
                </ul>
            </li>
            <li class="nav-item has-treeview" v-if="access_level.links.enabled_links_tab==1">
                <a href="#" class="nav-link">
                <i class="fas fa-link"></i>
                <p>
                    Links
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="pos-link" class="nav-link" v-if="access_level.links.pos_links.show_tab==1">
                        <i class="fas fa-external-link-square-alt"></i>
                        <p>POS Link</p>
                    </router-link>
                    <router-link to="pos-demo-link" class="nav-link" v-if="access_level.links.pos_demo_links.show_tab==1">
                        <i class="fas fa-video"></i>
                        <p>POS Demo Links</p>
                    </router-link>
                </li>
                </ul>
            </li>
            <li class="nav-item" v-if="access_level.feedback==1">
                <router-link to="/feedback" class="nav-link">
                <i class="fas fa-comments"></i>
                <p>
                    Feedback
                </p>
                </router-link>
            </li>
            <li class="nav-item" v-if="access_level.backup==1">
                <router-link to="/online-backup" class="nav-link">
                <i class="fas fa-database"></i>
                <p>
                    Backups
                </p>
                </router-link>
            </li>
            <li class="nav-item has-treeview" v-if="access_level.enquiry.enabled_enquiry_tab==1">
                <a href="#" class="nav-link">
                <i class="fas fa-circle"></i>
                <p>
                    Enquiry
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="campaign-enquiry" class="nav-link" v-if="access_level.enquiry.campaign_enquiry.show_tab==1">
                        <i class="fas fa-users"></i>
                        <p>Campaign Enquiry</p>
                    </router-link>
                    <router-link to="quick-enquiry" class="nav-link" v-if="access_level.enquiry.quick_enquiry.show_tab==1">
                    <i class="fas fa-users"></i>
                    <p>Quick Enquiry</p>
                    </router-link>
                </li>
                </ul>
            </li>
            <li class="nav-item has-treeview" v-if="access_level.aur_employee.enabled_employee_tab==1">
                <a href="#" class="nav-link">
                <i class="fas fa-circle"></i>
                <p>
                    Our Employees
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview" v-if="access_level.aur_employee.employee.show_tab==1">
                    <li class="nav-item">
                        <router-link to="users" class="nav-link">
                        <i class="fas fa-users"></i>
                        <p>Users</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="point-of-contact" class="nav-link">
                        <i class="fas fa-users"></i>
                        <p>Point Of Contact</p>
                        </router-link>
                    </li>
                </ul>
            </li>
           
            
            <li class="nav-item" v-if="access_level.profile==1">
                <router-link to="/profile" class="nav-link">
                <i class="fas fa-user-alt"></i>
                <p>
                    Profile
                </p>
                </router-link>
            </li>
            
            <!--  -->


            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            access_level:{
                feedback:0,
                backup:0,
                profile:0,
                pos_offline_registration:{
                    pos_offline_registration_tab:0,
                    pos_registration:{
                        show_tab:0,
                    },
                    captain_app:{
                          show_tab:0
                    },
                    kitchen_app:{
                          show_tab: 0
                    }
                },
                pos_offline_activation:{
                    pos_offline_activation_tab:0,
                    pos_activation_keys:{
                        show_tab:0
                    }
                },
                promocode_offline:{
                    enabled_promocode_offline_tab:0,
                    promocode_pos:{
                        show_tab:0
                    },
                    promocode_history:0
                },
                pos_plan_and_payment:{
                    enabled_pos_plan:0
                },
                tmchannel:{
                    enabled_tmchannel: 0,
                    activated_users:{
                        show_tab:0
                    }

                },
                atlantic_pos:{
                    enabled_atlantic_pos:0,
                    activated_users:{
                        show_tab:0
                    },
                    atlantic_pos_plus_tmchannel:{
                        show_tab:0
                    },
                    demo_request:{
                        show_tab:0
                    },
                    support_queries:{
                        show_tab:0
                    },
                    atlantic_notification:{
                          show_tab:0,
                          add:0,
                          edit:0
                        }
                },
                sms:{
                    send_sms:0
                },
                links:{
                    enabled_links_tab:0,
                    pos_links:{
                        show_tab:0
                    },
                    pos_demo_links:{
                        show_tab:0
                    }
                },
                enquiry:{
                    enabled_enquiry_tab:0,
                    campaign_enquiry:{
                        show_tab: 0,
                       
                    },
                    quick_enquiry:{
                        show_tab: 0,
                    }
                },
                aur_employee:{
                    enabled_employee_tab:0,
                    employee:{
                          show_tab: 0
                    }
                }
            }
        }
    },
    methods: {
        
    },
    mounted() {
        this.access_level = window.gate.user.access_level;

        if(!this.access_level.atlantic_pos.hasOwnProperty('atlantic_notification')){
                this.access_level.atlantic_pos.atlantic_notification = {show_tab:"0",add:"0",edit:"0"};
            }
        // console.log(this.access_level.pos_plan_and_payment);
    },
}
</script>