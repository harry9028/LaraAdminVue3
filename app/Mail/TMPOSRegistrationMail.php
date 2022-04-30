<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TMPOSRegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('support@tmbill.com', 'TMBill Software')
                        ->replyTo('support@tmbill.com', 'TMBill Software')
                        ->view('emails.tmpos-mail')
                        ->subject('TMBill Atlantic POS Activation Credentials');
    }
}
