<?php

namespace App\Exports;

use App\Models\TMPOS_USER;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
class TMPOSUsersExport implements FromCollection,WithHeadings
{
  
    public function headings(): array
    {
         return [
            'Name',
            'Owner Name',
            'Email',
            'Phone'
        ];
    }
    public function collection()
    {
        return TMPOS_USER::select('name', 'owner_name', 'email', 'mobile')->orderBy('id', 'desc')->get();
    }
}
