<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\User;
class UsersExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
    {
        return [
            'id',
            'Name',
            'Email',
            'Email Verified At',
            'Type',
            'Bio',
            'Photo',
            'Is Actvie',
            'Created At',
            'Update At',
        ];
    }
    public function collection()
    {
        //
         return User::all();
    }
}
