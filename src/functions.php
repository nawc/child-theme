<?php
/**
 * Meeting List changes to include new meeting types.
 */
if (function_exists('tsml_custom_types')) {
    tsml_custom_types([
        'HYB' => 'Online & In-Person',
        'IPO' => 'In-Person',
    ]);
}
