<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NotificationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            
            'notification_title'    => 'required|max:100',
            'notification_description' => 'nullable|max:255',
            'notification_type'     => 'required',
            'where_to_show_notification'=> 'required',
            'image_popup_path'      => 'nullable',
            'popup_click_link'      => 'nullable|max:255',
            'notification_image_path'=> 'nullable',
            'user_type'             => 'required',
        ];
    }
}
