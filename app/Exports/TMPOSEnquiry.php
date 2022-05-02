<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\TMPOS_ENQUIRY;
class TMPOSEnquiry implements FromCollection,WithHeadings
{
    public function __construct($starDate, $endDate)
    {
       
        $this->starDate = $starDate;
        $this->endDate = $endDate;
    }
    public function headings(): array
    {
        return [
            'mobile',
            'owner_name',
            'hotel_name',
            'address',
            'city',
            'email',
            'message',
            'enquiry_count',
            'date_time',
            'type'
        ];
    }
    public function collection()
    {
        return TMPOS_ENQUIRY::get();
                // whereBetween('date_time', [date('Y-m-d H:i:s', strtotime($this->starDate)), date('Y-m-d H:i:s', strtotime($this->endDate))])
            // ->get();
    }
}
